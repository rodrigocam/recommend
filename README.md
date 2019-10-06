# recommend
simple recommendation engine

## Usage
To run `recommend` CLI, you need a [redis](https://redis.io/) instance for the [recommendationRaccoon](https://github.com/guymorita/recommendationRaccoon) library. You can either install redis and run on your machine or use the `docker-compose.yml` in this directory:

```
$ sudo docker-compose up -d
```

With a redis running you need export the configuration variables for `recommendationRaccoon` access:

```
$ export RACCOON_REDIS_URL=localhost
$ export RACCOON_REDIS_PORT=6379
$ export RACCOON_REDIS_AUTH=recommend123
```

Finally you can install `recommend`:

```
$ npm install
```

And use it:

```
$ recommend -d dataset.csv -u Jack
```

The `-d` option is the path of the user-follow dataset and `-u` is the user you want the recommendation. The output will be a ordered list of follow recommendation, where the first is the most recommended.
