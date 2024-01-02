const FavoriteBucketDAO = require("../dao/FavoriteBucketDAO");

class FavoriteBucketMemoryDAO extends FavoriteBucketDAO{

    static favorites = [];

    findAll() {
        return FavoriteBucketMemoryDAO.favorites;
    }

    findFavoritesByUser(user) {
        return FavoriteBucketMemoryDAO.favorites.find(bucket => bucket.getUser.equals(user));
    }

    delete(bucket) {
        FavoriteBucketMemoryDAO.favorites = FavoriteBucketMemoryDAO.favorites.filter(list => !list.getUser.equals(bucket.getUser));
    }

    save(bucket) {
        let foundBucket = FavoriteBucketMemoryDAO.favorites.filter(list => list.getUser.equals(bucket.getUser));
        if (foundBucket.length === 0) {
            FavoriteBucketMemoryDAO.favorites.push(bucket);
        }
    }
}

module.exports = FavoriteBucketMemoryDAO;
