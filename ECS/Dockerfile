FROM ubuntu:16.04

# Install Dependencis
RUN apt-get update -y
RUN apt-get install -y git curl apache2 php libapache2-mod-php php-mcrypt php-mysql

# Install app
RUN rm -rf /var/www/*
ADD src /var/www
ADD src /var/www/html


# Config apache
RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2/apache2.pid

EXPOSE 80

CMD ["/usr/sbin/apache2","-D","FOREGROUND"]
