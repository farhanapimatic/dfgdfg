/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Cart
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('Cart', ['BaseModel', CartModel]);

    function CartModel(BaseModel) {
        var Cart = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.cartId = this.getValue(obj.cartId);
            this.hMAC = this.getValue(obj.hMAC);
            this.uRLEncodedHMAC = this.getValue(obj.uRLEncodedHMAC);
            this.request = this.getValue(obj.request);
            this.purchaseURL = this.getValue(obj.purchaseURL);
            this.mobileCartURL = this.getValue(obj.mobileCartURL);
            this.subTotal = this.getValue(obj.subTotal);
            this.cartItems = this.getValue(obj.cartItems);
            this.savedForLaterItems = this.getValue(obj.savedForLaterItems);
            this.similarProducts = this.getValue(obj.similarProducts);
            this.topSellers = this.getValue(obj.topSellers);
            this.newReleases = this.getValue(obj.newReleases);
            this.similarViewedProducts = this.getValue(obj.similarViewedProducts);
            this.otherCategoriesSimilarProducts = this.getValue(obj.otherCategoriesSimilarProducts);
        };

        Cart.prototype = new BaseModel();
        Cart.prototype.constructor = Cart;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Cart.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'cartId', realName: 'CartId' },
                { name: 'hMAC', realName: 'HMAC' },
                { name: 'uRLEncodedHMAC', realName: 'URLEncodedHMAC' },
                { name: 'request', realName: 'Request', type: 'Request' },
                { name: 'purchaseURL', realName: 'PurchaseURL' },
                { name: 'mobileCartURL', realName: 'MobileCartURL' },
                { name: 'subTotal', realName: 'SubTotal', type: 'Price' },
                { name: 'cartItems', realName: 'CartItems', type: 'CartItems' },
                { name: 'savedForLaterItems', realName: 'SavedForLaterItems', type: 'SavedForLaterItems' },
                { name: 'similarProducts', realName: 'SimilarProducts', type: 'SimilarProducts' },
                { name: 'topSellers', realName: 'TopSellers', type: 'TopSellers' },
                { name: 'newReleases', realName: 'NewReleases', type: 'NewReleases' },
                { name: 'similarViewedProducts', realName: 'SimilarViewedProducts', type: 'SimilarViewedProducts' },
                {
                    name: 'otherCategoriesSimilarProducts',
                    realName: 'OtherCategoriesSimilarProducts',
                    type: 'OtherCategoriesSimilarProducts',
                }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Cart.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        Cart.prototype.getCartId = function () {
            return this.cartId;
        };
    
        /**
         * Setter for CartId
         * 
         * @param {string} value 
         */
        Cart.prototype.setCartId = function (value) {
            this.cartId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        Cart.prototype.getHMAC = function () {
            return this.hMAC;
        };
    
        /**
         * Setter for HMAC
         * 
         * @param {string} value 
         */
        Cart.prototype.setHMAC = function (value) {
            this.hMAC = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        Cart.prototype.getURLEncodedHMAC = function () {
            return this.uRLEncodedHMAC;
        };
    
        /**
         * Setter for URLEncodedHMAC
         * 
         * @param {string} value 
         */
        Cart.prototype.setURLEncodedHMAC = function (value) {
            this.uRLEncodedHMAC = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {Request|null}
         */
        Cart.prototype.getRequest = function () {
            return this.request;
        };
    
        /**
         * Setter for Request
         * 
         * @param {Request|null} value 
         */
        Cart.prototype.setRequest = function (value) {
            this.request = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Cart.prototype.getPurchaseURL = function () {
            return this.purchaseURL;
        };
    
        /**
         * Setter for PurchaseURL
         * 
         * @param {string|null} value 
         */
        Cart.prototype.setPurchaseURL = function (value) {
            this.purchaseURL = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Cart.prototype.getMobileCartURL = function () {
            return this.mobileCartURL;
        };
    
        /**
         * Setter for MobileCartURL
         * 
         * @param {string|null} value 
         */
        Cart.prototype.setMobileCartURL = function (value) {
            this.mobileCartURL = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {Price|null}
         */
        Cart.prototype.getSubTotal = function () {
            return this.subTotal;
        };
    
        /**
         * Setter for SubTotal
         * 
         * @param {Price|null} value 
         */
        Cart.prototype.setSubTotal = function (value) {
            this.subTotal = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {CartItems|null}
         */
        Cart.prototype.getCartItems = function () {
            return this.cartItems;
        };
    
        /**
         * Setter for CartItems
         * 
         * @param {CartItems|null} value 
         */
        Cart.prototype.setCartItems = function (value) {
            this.cartItems = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SavedForLaterItems|null}
         */
        Cart.prototype.getSavedForLaterItems = function () {
            return this.savedForLaterItems;
        };
    
        /**
         * Setter for SavedForLaterItems
         * 
         * @param {SavedForLaterItems|null} value 
         */
        Cart.prototype.setSavedForLaterItems = function (value) {
            this.savedForLaterItems = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SimilarProducts|null}
         */
        Cart.prototype.getSimilarProducts = function () {
            return this.similarProducts;
        };
    
        /**
         * Setter for SimilarProducts
         * 
         * @param {SimilarProducts|null} value 
         */
        Cart.prototype.setSimilarProducts = function (value) {
            this.similarProducts = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {TopSellers|null}
         */
        Cart.prototype.getTopSellers = function () {
            return this.topSellers;
        };
    
        /**
         * Setter for TopSellers
         * 
         * @param {TopSellers|null} value 
         */
        Cart.prototype.setTopSellers = function (value) {
            this.topSellers = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {NewReleases|null}
         */
        Cart.prototype.getNewReleases = function () {
            return this.newReleases;
        };
    
        /**
         * Setter for NewReleases
         * 
         * @param {NewReleases|null} value 
         */
        Cart.prototype.setNewReleases = function (value) {
            this.newReleases = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {SimilarViewedProducts|null}
         */
        Cart.prototype.getSimilarViewedProducts = function () {
            return this.similarViewedProducts;
        };
    
        /**
         * Setter for SimilarViewedProducts
         * 
         * @param {SimilarViewedProducts|null} value 
         */
        Cart.prototype.setSimilarViewedProducts = function (value) {
            this.similarViewedProducts = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {OtherCategoriesSimilarProducts|null}
         */
        Cart.prototype.getOtherCategoriesSimilarProducts = function () {
            return this.otherCategoriesSimilarProducts;
        };
    
        /**
         * Setter for OtherCategoriesSimilarProducts
         * 
         * @param {OtherCategoriesSimilarProducts|null} value 
         */
        Cart.prototype.setOtherCategoriesSimilarProducts = function (value) {
            this.otherCategoriesSimilarProducts = value;
        };
    
        return Cart;
    }

}(angular));
