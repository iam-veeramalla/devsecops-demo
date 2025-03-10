# Build stage
FROM node:20-alpine AS build
#Create the work directory /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.25.5
RUN apt-get update && apt-get upgrade -y && apt-get clean
COPY --from=build /app/dist /usr/share/nginx/html
# Add nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]