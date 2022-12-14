package com.reports.service.atn.controllers;

import com.reports.service.atn.entities.Report;
import com.reports.service.atn.services.ReportServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/reports/"})
@CrossOrigin("*")
public class ReportController {
    @Autowired
    private ReportServices reportServices;

    public ReportController() {
    }

    @PostMapping({"/"})
    public Report saveReport(@RequestBody Report report) throws Exception {
        return this.reportServices.saveReport(report);
    }

    @GetMapping({"/"})
    public List<Report> getAllReports() {return this.reportServices.getAllReports();}

    @GetMapping({"/date/{date}"})
    public List<Report> getReportByDate(@PathVariable("date") String date) {
        return this.reportServices.getReportByDate(date);
    }

    @GetMapping({"/author/{author}"})
    public List<Report> getReportByAuthor(@PathVariable("author") String author) {
        return this.reportServices.getReportByAuthor(author);
    }

    @DeleteMapping({"/{reportId}"})
    public void deleteReport(@PathVariable("reportId") Long reportId) {
        this.reportServices.deleteReport(reportId);
    }

}