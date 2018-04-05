/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Item
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('Item', ['BaseModel', ItemModel]);

    function ItemModel(BaseModel) {
        var Item = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.aSIN = this.getValue(obj.aSIN);
            this.offerListingId = this.getValue(obj.offerListingId);
            this.quantity = this.getValue(obj.quantity);
            this.associateTag = this.getValue(obj.associateTag);
            this.listItemId = this.getValue(obj.listItemId);
        };

        Item.prototype = new BaseModel();
        Item.prototype.constructor = Item;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Item.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'aSIN', realName: 'ASIN' },
                { name: 'offerListingId', realName: 'OfferListingId' },
                { name: 'quantity', realName: 'Quantity' },
                { name: 'associateTag', realName: 'AssociateTag' },
                { name: 'listItemId', realName: 'ListItemId' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Item.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Item.prototype.getASIN = function () {
            return this.aSIN;
        };
    
        /**
         * Setter for ASIN
         * 
         * @param {string|null} value 
         */
        Item.prototype.setASIN = function (value) {
            this.aSIN = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Item.prototype.getOfferListingId = function () {
            return this.offerListingId;
        };
    
        /**
         * Setter for OfferListingId
         * 
         * @param {string|null} value 
         */
        Item.prototype.setOfferListingId = function (value) {
            this.offerListingId = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int|null}
         */
        Item.prototype.getQuantity = function () {
            return this.quantity;
        };
    
        /**
         * Setter for Quantity
         * 
         * @param {int|null} value 
         */
        Item.prototype.setQuantity = function (value) {
            this.quantity = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Item.prototype.getAssociateTag = function () {
            return this.associateTag;
        };
    
        /**
         * Setter for AssociateTag
         * 
         * @param {string|null} value 
         */
        Item.prototype.setAssociateTag = function (value) {
            this.associateTag = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Item.prototype.getListItemId = function () {
            return this.listItemId;
        };
    
        /**
         * Setter for ListItemId
         * 
         * @param {string|null} value 
         */
        Item.prototype.setListItemId = function (value) {
            this.listItemId = value;
        };
    
        return Item;
    }

}(angular));
