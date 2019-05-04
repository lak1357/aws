package com.aws.example.stsdemo.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.aws.example.stsdemo.service.CloudStorage;
import com.aws.example.stsdemo.service.Message;

@RestController
public class SampleController {

	@Autowired
	CloudStorage awsCloudStorage;

	@RequestMapping(method = RequestMethod.GET, path = "/create")
	public Message createObject() {

		String filename = System.currentTimeMillis() + ".txt";
		String content = "Date:" + new Date().toString();

		this.awsCloudStorage.uploadFile(filename, content);

		return new Message("object created");

	}

}
