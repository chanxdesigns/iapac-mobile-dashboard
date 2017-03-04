var mbApp = angular.module('mbServices', []);

/**
 * Value Store Service
 * Stores Project ID, Status and Country in the same named singleton
 */
mbApp.service('ValueStoreService', valueStoreService);
function valueStoreService() {
    this._statesValue = {};
    this.setValues = function (key, value) {
        if (key && value) {
            this._statesValue[key] = value;
        }
    }
    this.getValues = function () {
        return this._statesValue;
    }
}