cd /usr/local/mysql/support-files/
sudo ./mysql.server stop
sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables
mysql -u -root -p

