const CustomerHomeServices = require('../Services/CustomerHomeServices');

class CustomerHomeController {
    async getStoresInCategoryByUserState(req, res) {
        try {
            const { categoryId, userId } = req.params;

            const stores = await CustomerHomeServices.getStoresInCategoryByUserState(categoryId, userId);

            res.status(200).json({
                status: 'success',
                message: 'Filtered stores retrieved successfully.',
                data: stores
            });
        } catch (error) {
            res.status(400).json({
                status: 'failure',
                message: 'Failed to retrieve filtered stores.',
                error: error.message
            });
        }
    }
}

module.exports = new CustomerHomeController();
