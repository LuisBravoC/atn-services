package com.reports.service.atn.repositories;

import com.reports.service.atn.entities.Report;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {

    List<Report> findByDate(String date);

    List<Report> findByAuthor(String author);

}
