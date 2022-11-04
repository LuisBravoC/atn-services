package com.reports.service.atn.services;

import com.reports.service.atn.entities.Report;

import java.util.List;

public interface ReportServices {

    Report  saveReport(Report report) throws Exception;

    List<Report > getAllReports();

    List<Report> getReportByDate(String date);

    List<Report> getReportByAuthor(String author);

    void deleteReport (Long ReportId);

}
