From idiswy/lnmp

# Make port 80 available to the world outside this container
EXPOSE 80


# Run app.py when the container launches
CMD ["npm", "run", "dev"]
