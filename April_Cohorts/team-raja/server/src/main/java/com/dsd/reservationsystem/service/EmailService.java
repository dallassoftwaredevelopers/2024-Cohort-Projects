package com.dsd.reservationsystem.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class EmailService {

  private final JavaMailSenderImpl emailSender;

  public EmailService() {

    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost("smtp.gmail.com");
    mailSender.setPort(587);

    mailSender.setUsername("dallascohort@gmail.com"); // Replace with your email
    mailSender.setPassword("ptbt ureo wswh lyph"); // Replace with your password - generate token
    mailSender.setProtocol("smtp");

    Properties props = mailSender.getJavaMailProperties();
    // props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.debug", "true");
    mailSender.setJavaMailProperties(props);
    this.emailSender = mailSender;
  }

  public void sendSimpleMessage(String to, String subject, String text) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("dallascohort@gmail.com"); // same email as line 21
    message.setTo(to);
    message.setSubject(subject);
    message.setText(text);
    emailSender.send(message);
  }
}