/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of ItemLink
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('ItemLink', ['BaseModel', ItemLinkModel]);

    function ItemLinkModel(BaseModel) {
        var ItemLink = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.description = this.getValue(obj.description);
            this.uRL = this.getValue(obj.uRL);
        };

        ItemLink.prototype = new BaseModel();
        ItemLink.prototype.constructor = ItemLink;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        ItemLink.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'description', realName: 'Description' },
                { name: 'uRL', realName: 'URL' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        ItemLink.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ItemLink.prototype.getDescription = function () {
            return this.description;
        };
    
        /**
         * Setter for Description
         * 
         * @param {string|null} value 
         */
        ItemLink.prototype.setDescription = function (value) {
            this.description = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        ItemLink.prototype.getURL = function () {
            return this.uRL;
        };
    
        /**
         * Setter for URL
         * 
         * @param {string|null} value 
         */
        ItemLink.prototype.setURL = function (value) {
            this.uRL = value;
        };
    
        return ItemLink;
    }

}(angular));
