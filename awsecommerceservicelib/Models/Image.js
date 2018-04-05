/**
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of Image
 *
 * @constructor
 */
angular.module('AWSECommerceServiceLib')
    .factory('Image', ['BaseModel', ImageModel]);

    function ImageModel(BaseModel) {
        var Image = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.uRL = this.getValue(obj.uRL);
            this.height = this.getValue(obj.height);
            this.width = this.getValue(obj.width);
            this.isVerified = this.getValue(obj.isVerified);
        };

        Image.prototype = new BaseModel();
        Image.prototype.constructor = Image;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        Image.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'uRL', realName: 'URL' },
                { name: 'height', realName: 'Height', type: 'DecimalWithUnits' },
                { name: 'width', realName: 'Width', type: 'DecimalWithUnits' },
                { name: 'isVerified', realName: 'IsVerified' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        Image.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string}
         */
        Image.prototype.getURL = function () {
            return this.uRL;
        };
    
        /**
         * Setter for URL
         * 
         * @param {string} value 
         */
        Image.prototype.setURL = function (value) {
            this.uRL = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {DecimalWithUnits}
         */
        Image.prototype.getHeight = function () {
            return this.height;
        };
    
        /**
         * Setter for Height
         * 
         * @param {DecimalWithUnits} value 
         */
        Image.prototype.setHeight = function (value) {
            this.height = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {DecimalWithUnits}
         */
        Image.prototype.getWidth = function () {
            return this.width;
        };
    
        /**
         * Setter for Width
         * 
         * @param {DecimalWithUnits} value 
         */
        Image.prototype.setWidth = function (value) {
            this.width = value;
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {string|null}
         */
        Image.prototype.getIsVerified = function () {
            return this.isVerified;
        };
    
        /**
         * Setter for IsVerified
         * 
         * @param {string|null} value 
         */
        Image.prototype.setIsVerified = function (value) {
            this.isVerified = value;
        };
    
        return Image;
    }

}(angular));
