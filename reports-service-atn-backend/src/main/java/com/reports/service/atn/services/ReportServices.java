package com.reports.service.atn.services;

import com.reports.service.atn.entities.Report;

import java.util.List;

public interface ReportServices {

    Report  saveReport(Report report) throws Exception;

    List<Report > getAllReports();

    Report getReport (String date);

    void deleteReport (Long ReportId);

}
