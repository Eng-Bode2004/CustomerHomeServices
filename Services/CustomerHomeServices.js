const UserAddress = require('../Models/UserAddressModel');
const StoreModel = require('../models/Shop');
require('../Models/StoreAddressModel'); // ✅ Import the model to register it
class CustomerHomeServices {
    async getStoresInCategoryByUserState(categoryId, userId) {
        if (!categoryId || !userId) {
            return Promise.reject(new Error("Both categoryId and userId are required"));
        }

        // Step 1: Get user's address
        const userAddress = await UserAddress.findOne({ userId });
        if (!userAddress || !userAddress.state) {
            return Promise.reject(new Error("User address with state not found"));
        }

        const userState = userAddress.state.toLowerCase();

        // Step 2: Get all stores in the category with populated address
        const stores = await StoreModel.find({ StoreCategory: categoryId })
            .populate('Address')
            .lean();

        // Step 3: Filter stores where address.state matches user state
        return stores.filter(store =>
            store.Address?.state &&
            store.Address.state.toLowerCase() === userState
        );

    }
}

module.exports = new CustomerHomeServices();
