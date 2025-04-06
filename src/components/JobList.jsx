import { useEffect, useState } from "react";
import LargeJobCard from "./LargeJobCard";
import "../styles/JobList.css";

const JobList = ({ jobs, setSelectedJob, selectedJob }) => {
  const jobsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");

  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;

  // Järjestetään työpaikat valitun järjestyksen mukaan
  const sortedJobs = [...jobs].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const currentJobs = sortedJobs.slice(startIndex, startIndex + jobsPerPage);

  useEffect(() => {
    if (currentJobs.length > 0) {
      setSelectedJob(currentJobs[0]);
    }
  }, [currentPage, sortOrder]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" && currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (event.key === "ArrowRight" && currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisible = 4;

    pages.push(1);

    if (totalPages <= maxVisible) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        startPage = 2;
        endPage = 4;
      }

      if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      if (startPage > 2) {
        pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages.map((page, index) => (
      <button
        key={index}
        className={`pagination-button ${currentPage === page ? "active" : ""}`}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        disabled={page === "..."}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="job-list-wrapper">
      {/* Dropdown valikko järjestyksen valintaan */}
      <div className="job-list-header">
        <select
          className="sort-dropdown"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setCurrentPage(1); // palataan ensimmäiselle sivulle
          }}
        >
          <option value="newest">Uusimmat</option>
          <option value="oldest">Vanhimmat</option>
        </select>
      </div>

      {/* Työpaikkalistaukset */}
      <div className="job-list">
        {currentJobs.map((job) => (
          <LargeJobCard
            key={job.id}
            {...job}
            onClick={() => setSelectedJob(job)}
            isActive={selectedJob?.id === job.id}
          />
        ))}
      </div>

      {/* Sivutus */}
      {totalPages > 1 && (
        <div className="pagination-container">{renderPagination()}</div>
      )}
    </div>
  );
};

export default JobList;
