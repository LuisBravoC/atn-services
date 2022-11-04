package com.reports.service.atn.services.implementations;

import com.reports.service.atn.entities.Report;
import com.reports.service.atn.repositories.ReportRepository;
import com.reports.service.atn.services.ReportServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportServiceImpl implements ReportServices {

    @Autowired
    private ReportRepository reportRepository;

    public ReportServiceImpl() {
    }

    public Report saveReport(Report report) {
        return this.reportRepository.save(report);
    }

    public List<Report> getAllReports() {
        return this.reportRepository.findAll();
    }

    public List<Report> getReportByDate(String date) {
        return this.reportRepository.findByDate(date);
    }

    public List<Report> getReportByAuthor(String author) {
        return this.reportRepository.findByAuthor(author);
    }

    public void deleteReport(Long reportId) {
        this.reportRepository.deleteById(reportId);
    }
}
