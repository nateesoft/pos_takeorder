# pull images from Dockerfile

docker build -t api_pos .

## run docker from images

docker run -d -p 5000:5000 api_pos
