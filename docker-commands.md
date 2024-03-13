
sudo docker run --name mongo-local -p 27017:27017 -v /home/mongo-data:/data/db --restart unless-stopped mongo:latest
