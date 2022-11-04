package com.reports.service.atn.repositories;

import com.reports.service.atn.entities.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {

    Report findByDate(String date);

}
