# A personality test webapp

A personality test I did. It took me about 20hours.

Shoutout to Aymeric Augustin and his wonderful [article](https://fractalideas.com/blog/making-react-and-django-play-well-together-hybrid-app-model/) on a "hybrid" model app, using Django and React,
on which I based this project.

## To run locally

Clone this repository onto your local machine.
Install `pyenv` if you haven't yet, and configure a new venv using Python 3.10.
After that, run `make install` on a terminal window. This will build the frontend app and move all the 
build components into the folder that's statically served by the Django server.

To run locally, first produce the local `.env` files, one in the main directory, and the other in the frontend directory.
You can simply copy the contents in the `.env.example` files for this.
After that's done, run `make runserver` on the main directory. 
Then, open another terminal on the frontend directory, and run `yarn start`.
Following the default configs, the app should now be accessible at `localhost:8000`. The api can be consulted at 
`localhost:8000/api/`.
