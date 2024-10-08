# The base image
FROM ubuntu			

# Installation dependencies 
RUN apt-get update		
RUN apt-get install -y nginx

# Installation of static site files 
# Open TCP port 80
EXPOSE 80			

# Setting the web server application as the default
CMD ["nginx", "-g", "daemon off;"]
