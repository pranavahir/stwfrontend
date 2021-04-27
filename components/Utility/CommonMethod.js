export default {

    // Utility Methods
    JsonCopy: function(Value) {
    
        return JSON.parse(JSON.stringify(Value))
    },

 
 

    // <onkeypress="return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 47 && event.charCode <= 57) || event.charCode == 46 || event.charCode==95 " placeholder="Reference No"></b-form-input>

    IsNotNullOrEmptyOrUndefined: function(Value) {
        var result = false;
        if (Value != null && Value != "" && Value != undefined && Value != "0.00") {
            result = true;
        } else {
            result = false;
        }
        return result;
    },
    IsValidMobile: function(mobileNumber) {
        var result = false;
        if (this.IsNotNullOrEmptyOrUndefined(mobileNumber)) {
            var mobile = mobileNumber;
            if (mobile.length >= 10 && mobile.length <= 12)
                result = true;
            else
                result = false;
        } else {

            result = false;
        }
        return result;
    },

    stringRangeValidation: function(data, min, max) {

        var result = false;

        if (this.IsNotNullOrEmptyOrUndefined(data)) {
            var fromData = data;
            if (fromData.length >= min || fromData.length <= max)
                result = true;
            else
                result = false;
        } else
            result = false;

        return result;

    },

    IsValidEmailID: function(email) {
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
        return (!this.IsNotNullOrEmptyOrUndefined(email)) ? false : (reg.test(email)) ? true : false;
        //By Mani
        //note : first we chech the data of email is not empty if it is empty return false after that i check with Email pattern

    },
    IsValidOptionalEmailId: function(email) {
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
        return (!this.IsNotNullOrEmptyOrUndefined(email)) ? true : (reg.test(email)) ? true : false;
        //By Mani
        //note : this method is check the mailid is valid or not, if it is empty return true . this method for only optional field

    },

    IsValidWebSite: function(URL) {
        return (!this.IsNotNullOrEmptyOrUndefined(URL)) ? false : (this.WebsitePattern().test(URL)) ? true : false;
        //By Mani
        //note : first we chech the data of URL is not empty if it is empty return false after that i check with URL pattern
        // return (URL == "") ? "" : (this.WebsitePattern().test(URL)) ? true : false;
    },

    IsValidOptionalWebSite: function(URL) {
        return (!this.IsNotNullOrEmptyOrUndefined(URL)) ? true : (this.WebsitePattern().test(URL)) ? true : false;
        //By Mani
        //note : first we chech the data of URL is not empty if it is empty return false after that i check with URL pattern
        // return (URL == "") ? "" : (this.WebsitePattern().test(URL)) ? true : false;
    },


    AutoCaps: function(Value) {
        return Value;
    },

 
    //For Description fields -> done by mani
    afterDotCaps: function(key) {

        if (key.keyCode >= 65 && key.keyCode <= 122) {
            var ctrl = key.currentTarget
            var position = key.currentTarget.selectionStart;
            if (ctrl.textLength > 0 && key.currentTarget.selectionStart > 0) {
                var str = ctrl.value;
                if (ctrl.textLength != key.currentTarget.selectionStart) {

                    var data = str.slice(position - 3, position)
                    var dot = data.substring(0, 1); //letter one
                    var space = data.substring(2, 1); //letter one

                    if (dot === '.') {
                        var chk = data;
                        var che = data;
                        if (che !== undefined) {
                            dot = chk.substring(0, 1); //letter one
                            uchar = chk.substring(2, 1); //letter two
                            thr = chk.substring(2, 3); //letter three
                            if (che.length === 1) {
                                che = che.toUpperCase();
                                che = che;
                            } else {
                                if (dot === ".") {
                                    if (uchar.match(" ")) {
                                        che = che.slice(0, che.length - 1) + thr.toUpperCase();
                                    } else {
                                        che = che.slice(0, che.length - 2) + " " + uchar.toUpperCase() + thr;
                                    }
                                }
                            }
                        }

                        b = che;

                        key.currentTarget.value = [str.slice(0, position - 3), b, str.slice(position)].join('');
                        if (space == ' ') {
                            key.currentTarget.selectionStart = position;
                            key.currentTarget.selectionEnd = position;
                        } else {
                            key.currentTarget.selectionStart = position + 1;
                            key.currentTarget.selectionEnd = position + 1;
                        }
                    }
                } else {
                    var chk = ctrl.value;
                    var che = ctrl.value;
                    if (che !== undefined) {
                        chk = che.slice(che.length - 3);
                        dot = chk.substring(0, 1); //letter one

                        uchar = chk.substring(2, 1); //letter two

                        thr = chk.substring(2, 3); //letter three
                        if (che.length === 1) {
                            che = che.toUpperCase();
                            che = che;
                        } else {
                            if (dot === ".") {
                                if (uchar.match(" ")) {
                                    che = che.slice(0, che.length - 1) + thr.toUpperCase();
                                } else {
                                    che = che.slice(0, che.length - 2) + " " + uchar.toUpperCase() + thr;
                                }
                            }
                        }
                    }

                    key.currentTarget.value = che;
                    key.currentTarget.selectionStart = position + 1;
                    key.currentTarget.selectionEnd = position + 1;

                }
            }
        }


    },

    GetMonth: function(Month) {
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";

        return month[Month];

    },

    //return by Maxi
    equalsIgnoreCase: function(str1, str2) {
        if (this.isNotUndefindeOrEmpty(str2))
            return str1.toUpperCase() === str2.toUpperCase();
        else
            return false

    },

    selectFromList: function(Data, datalist, attr) {
        var Object = null;
        datalist.map(function(value, key) {
            if (Data == value[attr]) {
                Object = value;
            }
        });

        if (Object == null) {
            Object = {
                Id: 0,
                Name: null,
            }
            Object[attr] = Data;
        }
        return Object;
    },

    selectFromListWithoutCase: function(Data, datalist, attr) {
        var Object = null;
        datalist.map(function(value, key) {
            if (Data.toUpperCase() == value[attr].toUpperCase()) {
                Object = value;
            }
        });

        if (Object == null) {
            Object = {
                Id: 0,
                Name: null,
            }
            Object[attr] = Data;
        }
        return Object;
    },

    Getdayofweek: function(Day) {
        var dayvalue = null;

        switch (Day) {
            case '0':
                dayvalue = 'Sunday';
                break;
            case '1':
                dayvalue = 'Monday';
                break;
            case '2':
                dayvalue = 'Tuesday';
                break;
            case '3':
                dayvalue = 'Wednesday';
                break;
            case '4':
                dayvalue = 'Thursday';
                break;
            case '5':
                dayvalue = 'Friday';
                break;
            case '6':
                dayvalue = 'Saturday';
                break;
        }

        return dayvalue;
    },

    DateFormat(date) {
        var Completedate = "";
        if (this.IsNotNullOrEmptyOrUndefined(date)) {
            Completedate = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
            return Completedate;
        } else {
            return Completedate;
        }
    },



    DateFormaterVue: function(Data) {

        if (Data != null && Data != undefined && Data != "") {
            var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
            var DateFormat = AppData.DateFormat;
            var DateSeperator = AppData.DateSeperator;
            var FormatedDate = {
                date: null,
                Month: null,
                Year: null,
                ComlpeteDate: null
            };

            switch (DateFormat) {
                case 'yy M dd':
                    var str = "yyyy MMM dd";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'M yy dd':
                    var str = "MMM yyyy dd";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'dd M yy':
                    var str = "dd MMM yyyy";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'yy dd M':
                    var str = "yyyy dd MMM";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'M dd yy':
                    var str = "MMM dd yyyy";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
            }



            return FormatedDate.ComlpeteDate;
        }
    },



    DateFormater: function(Data) {

        if (Data != null && Data != undefined && Data != "") {
            var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
            var DateFormat = AppData.DateFormat;
            var DateSeperator = AppData.DateSeperator;
            var FormatedDate = {
                date: null,
                Month: null,
                Year: null,
                ComlpeteDate: null
            };

            switch (DateFormat) {
                case 'yy M dd':
                    var str = "yyyy MMM dd";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'M yy dd':
                    var str = "MMM yyyy dd";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'dd M yy':
                    var str = "dd MMM yyyy";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'yy dd M':
                    var str = "yyyy dd MMM";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
                case 'M dd yy':
                    var str = "MMM dd yyyy";
                    if (str != undefined && DateSeperator != undefined) {
                        str = str.replace(/ /, DateSeperator);
                        DateFormat = str.replace(/ /, DateSeperator);
                    }
                    FormatedDate.ComlpeteDate = $filter("date")(new Date(Data), DateFormat);
                    break;
            }



            return FormatedDate.ComlpeteDate;
        }
    },

    //  Application Configuration Date Separation
    DateSeparatorBinder: function() {

        var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var DateFormat = AppData.DateFormat;

        var DateSeperator = AppData.DateSeperator;
        var str = DateFormat;
        if (str != undefined && DateSeperator != undefined) {
            str = str.replace(/ /, DateSeperator);
            DateFormat = str.replace(/ /, DateSeperator);
        }
        return DateFormat;
    },

    isNotUndefindeOrEmpty: function(data) {
        var result = false;
        if (data != undefined && data != 'undefined' && data != "" && data != null && data != "null" && data != " ") {
            result = true;
        } else
            result = false;

        return result;
    },

    isNotZeroOrEmpty: function(data) {
        var result = false;
        var text = 0;
        var digits = this.CurrencyFormatText(0);
        if (this.isNotUndefindeOrEmpty(data)) {
            if (
                number != undefined &&
                number != digits &&
                number != null &&
                number != "" &&
                number != 0
            ) {
                var c = number.toString();
                text = c.replace(/\,/g, "");
                text = parseFloat(text);
                //Data = text.replace(/\$/g, "");
            }
        }

        return result;
    },

    // This convert function will be converted integer(Number) format to create method calling
    convert: function(number) {
        var text = 0;
        if (number != undefined && number != "0.00" && number != null && number != "" && number != 0) {
            var c = number.toString();
            text = c.replace(/\,/g, "");
        }
        return text;
    },


    ConvertToNumber: function(number) {

        var text = 0;
        var digits = this.CurrencyFormatText(0);
        if (
            number != undefined &&
            number != digits &&
            number != null &&
            number != "" &&
            number != 0
        ) {
            var c = number.toString();
            text = c.replace(/\,/g, "");
            text = parseFloat(text);
        }
        return text;
    },

    convertQuantity: function(number) {
        var text = 0;
        if (number != undefined && number != "0.00" && number != null && number != "" && number != 0) {
            var c = number.toString();
            text = c.replace(/\,/g, "");
        }
        return text;
    },


    // For Percentage Text Box
    PercentageTextBox: function(Data) {
        if (Data > 100) {
            if (Data != null && Data != undefined) {
                Data = Data.slice(0, -1);
            }
        }
        return Data;
    },

    convertToDigit: function(number) {
        var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var cSymbol = AppData.BaseCurrency.Symbol;
        var transactionCurrencySymbol = $window.sessionStorage.getItem("transactionCurrencySymbol");
        var currencyforGrid = $window.sessionStorage.getItem("transactionCurrencyCode");
        var SymbolofCurrency = null;
        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null && CustomerCurrencyCode != currencyforGrid)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";
        var Data = 0;
        if (number != undefined && number != null && number == '.')
            number = 0.00;

        if (number != undefined &&
            number != "0.00" &&
            number != null &&
            number != "" &&
            number != 0) {
            var c = number.toString();
            var text = c.replace(/\,/g, "");
            text = text.replace(SymbolofCurrency, "");
            Data = text.replace(" ", "");
            Data = Number(Data);
        }
        return Data;
    },

    convertToDigitFromNegative: function(number) {
        var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var cSymbol = AppData.BaseCurrency.Symbol;
        var transactionCurrencySymbol = $window.sessionStorage.getItem("transactionCurrencySymbol");
        var currencyforGrid = $window.sessionStorage.getItem("transactionCurrencyCode");
        var SymbolofCurrency = null;
        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null && CustomerCurrencyCode != currencyforGrid)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";
        var Data = 0;
        if (number != undefined && number != null && number == '.')
            number = 0.00;

        if (number != undefined &&
            number != "0.00" &&
            number != null &&
            number != "" &&
            number != 0) {
            var c = number.toString();
            var text = c.replace(/\,/g, "");
            text = text.replace(SymbolofCurrency, "");
            Data = text.replace(" ", "");
            Data = Data.replace("(", "-");
            Data = Data.replace(")", "");
        }
        return Data;
    },

    convertToDigitTransaction: function(number) {
        /// var cSymbol = $window.sessionStorage.getItem("transactionCurrencySymbol");

        var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var cSymbol = AppData.BaseCurrency.Symbol;

        var transactionCurrencySymbol = $window.sessionStorage.getItem("transactionCurrencySymbol");
        var currencyforGrid = $window.sessionStorage.getItem("transactionCurrencyCode");
        var SymbolofCurrency = null;
        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null && CustomerCurrencyCode != currencyforGrid)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";

        var Data = 0;
        if (
            number != undefined &&
            number != "0.00" &&
            number != null &&
            number != "" &&
            number != 0
        ) {
            var c = number.toString();
            var text = c.replace(/\,/g, "");
            Data = text.replace(SymbolofCurrency, "");
        }
        return Data;
    },

    PercentageSign: function(Data) {
        console.log("PercentageSign");
        if (Data != null && Data != undefined && Data != "") {
            Data = parseFloat(Data).toFixed(2);
            Data = Data + " %";
        } else {
            Data = "0.00 " + "%";
        }

        return Data;
    },

    // return Pattern for Email validation purpose
    EmailPattern: function() {
        return /^[A-Za-z0-9_\.-]{0,49}[A-Za-z0-9]@[A-Za-z0-9]{0,}[A-Za-z0-9_\.-]{0,}[A-Za-z0-9][\.][A-Za-z0-9]{2,4}$/;
    },

    // return Pattern for Website validation purpose
    WebsitePattern: function() {
        // return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

        return /^((http|https|ftp):\/\/(www\.)?|www\.)[a-zA-Z0-9\_\-]+\.([a-zA-Z]{2,4}|[a-zA-Z]{2}\.[a-zA-Z]{2})(\/[a-zA-Z0-9\-\._\?\&=,'\+%\$#~]*)*$/;
    },

    Documentvalidator: function(DocumentType, ReferenceNumber) {
        var result = false;

        switch (DocumentType) {
            case "GSTIN":
                result = this.GSTIN_validator(ReferenceNumber);
                break;
            case "PAN":
                result = this.PAN_validator(ReferenceNumber);
                break;
            case "CIN":
                result = this.GSTIN_validator(ReferenceNumber);
                break;
        }
        return result;
    },



    compareValues: function(key, order = 'asc') {
        return function(a, b) {
            if (!a.hasOwnProperty(key) ||
                !b.hasOwnProperty(key)) {
                return 0;
            }

            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ?
                (comparison * -1) : comparison
            );
        };
    },

    PAN_validator: function(DocRefNo) {
        var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        return (!this.IsNotNullOrEmptyOrUndefined(DocRefNo)) ? false : (regpan.test(DocRefNo)) ? true : false;
    },

    AccountNumber_validator: function(AccountNumber) {
        var regAcNo = /^\d{9,18}$/;
        return (!this.IsNotNullOrEmptyOrUndefined(AccountNumber)) ? false : (regAcNo.test(AccountNumber)) ? true : false;
    },

    IFSC_validator: function(IFSC) {
        var regIFSC =/[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/; 
        return (!this.IsNotNullOrEmptyOrUndefined(IFSC)) ? false : (regIFSC.test(IFSC)) ? true : false;
    },

    


    GSTIN_validator: function(DocRefNo) {
        var gstin = /^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[0-9a-zA-Z]{1}[0-9a-zA-Z]{1})+$/;
        return (!this.IsNotNullOrEmptyOrUndefined(DocRefNo)) ? false : (gstin.test(DocRefNo)) ? true : false;
    },


    CIN_validator: function(DocRefNo) {
        var cin = /^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/;
        return (!this.IsNotNullOrEmptyOrUndefined(DocRefNo)) ? false : (cin.test(DocRefNo)) ? true : false;
    },


    convertToDigitVue: function(number) {

        var cSymbol = this.GetSession("BaseCurrencySymbol");
        var transactionCurrencySymbol = this.GetSession("TransactionCurrencySymbol");
        var currencyforGrid = this.GetSession("BaseCurrencySymbol");
        var SymbolofCurrency = null;
        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";
        var Data = 0;
        if (number != undefined && number != null && number == '.')
            number = 0.00;

        if (number != undefined &&
            number != "0.00" &&
            number != null &&
            number != "" &&
            number != 0) {
            var c = number.toString();
            var text = c.replace(/\,/g, "");
            text = text.replace(SymbolofCurrency, "");
            Data = text.replace(" ", "");
            Data = text.replace("%", "");
            Data = Number(Data);
        } else
            Data = 0

        return Data;
    },

    // //Currency Format
    CurrencyFormat: function(number) {
        // var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        // var cSymbol = AppData.BaseCurrency.Symbol;
        // var decimalplaces = AppData.DecimalPoint;
        // var CurrencySysmbolOnRight = AppData.IsCurrencySymbolOnRight;
        // var IsThousandseparater = AppData.IsThousandSeperatorRequired;

        var cSymbol = this.GetSession("BaseCurrencySymbol");
        var decimalplaces = 2;
        var CurrencySysmbolOnRight = false;
        var IsThousandseparater = true;

        var transactionCurrencySymbol = this.GetSession("BaseCurrencySymbol");
        var currencyforGrid = this.GetSession("BaseCurrencyCode");
        var SymbolofCurrency = null;
        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";


        var CurrencySign = SymbolofCurrency + " ";

        if (number == undefined || number == null || number == '.' || number == "")
            number = 0.00;

        var Num = number;
        var finalCurrencyObj = null;
        if (number != undefined) {
            var decimalcharacter = ".";

            var thousandseparater = ",";
            if (IsThousandseparater == false)
                thousandseparater = "";
            else
                thousandseparater = ",";

            number = parseFloat(number);
            var sign = number < 0 ? "-" : "";

            var formatted = new String(number.toFixed(decimalplaces));
            if (decimalcharacter.length && decimalcharacter != ".") {
                formatted = formatted.replace(/\./, decimalcharacter);
            }
            var integer = "";
            var fraction = "";
            var strnumber = new String(formatted);
            var dotpos = decimalcharacter.length ?
                strnumber.indexOf(decimalcharacter) :
                -1;
            if (dotpos > -1) {
                if (dotpos) {
                    integer = strnumber.substr(0, dotpos);
                }
                fraction = strnumber.substr(dotpos + 1);
            } else {
                integer = strnumber;
            }
            if (integer) {
                integer = String(Math.abs(integer));
            }
            while (fraction.length < decimalplaces) {
                fraction += "0";
            }
            var temparray = new Array();
            while (integer.length > 3) {
                temparray.unshift(integer.substr(-3));
                integer = integer.substr(0, integer.length - 3);
            }
            temparray.unshift(integer);
            integer = temparray.join(thousandseparater);
            if (Num < 0) {
                if (CurrencySysmbolOnRight == true)
                    finalCurrencyObj = "(" + integer + decimalcharacter + fraction + " " + CurrencySign + ")";
                else
                    finalCurrencyObj = "(" + CurrencySign + integer + decimalcharacter + fraction + ")";
            } else {
                if (CurrencySysmbolOnRight == true)
                    finalCurrencyObj =
                    integer + decimalcharacter + fraction + " " + CurrencySign;
                else
                    finalCurrencyObj =
                    CurrencySign + integer + decimalcharacter + fraction;
            }
            return finalCurrencyObj;
        } else {
            if (CurrencySysmbolOnRight == true)
                return "0.00 " + CurrencySign;
            else
                return CurrencySign + " 0.00";
        }
    },

    CurrencyFormatforTrialBalance: function(number) {
        // var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var cSymbol = AppData.BaseCurrency.Symbol;
        var decimalplaces = AppData.DecimalPoint;
        var CurrencySysmbolOnRight = AppData.IsCurrencySymbolOnRight;
        var IsThousandseparater = AppData.IsThousandSeperatorRequired;

        var transactionCurrencySymbol = $window.sessionStorage.getItem("TransactionCurrencySymbol");
        var currencyforGrid = $window.sessionStorage.getItem("TransactionCurrencyCode");
        var SymbolofCurrency = null;

        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null && CustomerCurrencyCode != currencyforGrid)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";


        var CurrencySign = SymbolofCurrency + " ";

        if (number != undefined && number != null && number == '.')
            number = 0.00;

        var Num = number;
        var finalCurrencyObj = null;
        if (number != undefined) {
            var decimalcharacter = ".";

            var thousandseparater = ",";
            if (IsThousandseparater == false)
                thousandseparater = "";
            else
                thousandseparater = ",";

            number = parseFloat(number);
            var sign = number < 0 ? "-" : "";

            var formatted = new String(number.toFixed(decimalplaces));
            if (decimalcharacter.length && decimalcharacter != ".") {
                formatted = formatted.replace(/\./, decimalcharacter);
            }
            var integer = "";
            var fraction = "";
            var strnumber = new String(formatted);
            var dotpos = decimalcharacter.length ?
                strnumber.indexOf(decimalcharacter) :
                -1;
            if (dotpos > -1) {
                if (dotpos) {
                    integer = strnumber.substr(0, dotpos);
                }
                fraction = strnumber.substr(dotpos + 1);
            } else {
                integer = strnumber;
            }
            if (integer) {
                integer = String(Math.abs(integer));
            }
            while (fraction.length < decimalplaces) {
                fraction += "0";
            }
            temparray = new Array();
            while (integer.length > 3) {
                temparray.unshift(integer.substr(-3));
                integer = integer.substr(0, integer.length - 3);
            }
            temparray.unshift(integer);
            integer = temparray.join(thousandseparater);
            if (CurrencySysmbolOnRight == true)
                finalCurrencyObj =
                integer + decimalcharacter + fraction + " " + CurrencySign;
            else
                finalCurrencyObj =
                CurrencySign + integer + decimalcharacter + fraction;
            return finalCurrencyObj;
        } else {
            if (CurrencySysmbolOnRight == true)
                return "0.00 " + CurrencySign;
            else
                return CurrencySign + " 0.00";
        }
    },


    CurrencyFormatgrid: function(number, existingCurrency) {
        var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var cSymbol = AppData.BaseCurrency.Symbol;
        var decimalplaces = AppData.DecimalPoint;
        var CurrencySysmbolOnRight = AppData.IsCurrencySymbolOnRight;
        var IsThousandseparater = AppData.IsThousandSeperatorRequired;

        var transactionCurrencySymbol = $window.sessionStorage.getItem("transactionCurrencySymbol");
        var SymbolofCurrency = null;
        var currencyforGrid = $window.sessionStorage.getItem("transactionCurrencyCode");
        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null && CustomerCurrencyCode != currencyforGrid)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";

        var CurrencySign = SymbolofCurrency + " ";

        if (number != undefined && number != null && number == '.')
            number = 0.00;
        var Num = number;
        var finalCurrencyObj = null;
        var temp = number;



        if (
            number != undefined &&
            number != "0.00" &&
            number != null &&
            number != ""
        ) {


            var str2 = (number.toString()).replace(/\,/g, "");
            var str3 = str2.replace(SymbolofCurrency, "");
            if (existingCurrency)
                var str3 = str3.replace(existingCurrency, "");
            var str3 = str3.replace(cSymbol, "");
            if (str3 != undefined && str3 != NaN) number = str3;


            var decimalcharacter = ".";

            var thousandseparater = ",";
            if (IsThousandseparater == false)
                thousandseparater = "";
            else
                thousandseparater = ",";

            number = parseFloat(number);
            var sign = number < 0 ? "-" : "";

            var formatted = new String(number.toFixed(decimalplaces));
            if (decimalcharacter.length && decimalcharacter != ".") {
                formatted = formatted.replace(/\./, decimalcharacter);
            }
            var integer = "";
            var fraction = "";
            var strnumber = new String(formatted);
            var dotpos = decimalcharacter.length ?
                strnumber.indexOf(decimalcharacter) :
                -1;
            if (dotpos > -1) {
                if (dotpos) {
                    integer = strnumber.substr(0, dotpos);
                }
                fraction = strnumber.substr(dotpos + 1);
            } else {
                integer = strnumber;
            }
            if (integer) {
                integer = String(Math.abs(integer));
            }
            while (fraction.length < decimalplaces) {
                fraction += "0";
            }
            temparray = new Array();
            while (integer.length > 3) {
                temparray.unshift(integer.substr(-3));
                integer = integer.substr(0, integer.length - 3);
            }
            temparray.unshift(integer);
            integer = temparray.join(thousandseparater);



            if (Num < 0) {
                if (CurrencySysmbolOnRight == true)
                    finalCurrencyObj = "(" + integer + decimalcharacter + fraction + " " + CurrencySign + ")";
                else
                    finalCurrencyObj = "(" + CurrencySign + integer + decimalcharacter + fraction + ")";
            } else {
                if (CurrencySysmbolOnRight == true)
                    finalCurrencyObj =
                    integer + decimalcharacter + fraction + " " + CurrencySign;
                else
                    finalCurrencyObj =
                    CurrencySign + integer + decimalcharacter + fraction;
            }

            return finalCurrencyObj;
        } else {
            if (CurrencySysmbolOnRight == true)
                return "0.00 " + CurrencySign;
            else
                return CurrencySign + " 0.00";
        }
    },

    TransactionCurrencyFormat: function(number) {
        //var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var cSymbol ="₹";
        var decimalplaces = 2;
        var CurrencySysmbolOnRight = false;
        var IsThousandseparater = true;

        var transactionCurrencySymbol = this.GetSession("TransactionCurrencySymbol");
        var currencyforGrid = this.GetSession("TransactionCurrencyCode");
        var SymbolofCurrency = null;

        if (transactionCurrencySymbol != "null" && transactionCurrencySymbol != undefined && transactionCurrencySymbol != null)
            SymbolofCurrency = transactionCurrencySymbol;
        else if (cSymbol != null)
            SymbolofCurrency = cSymbol;
        else
            SymbolofCurrency = "";


        var CurrencySign = SymbolofCurrency + " ";

        if (number == undefined || number == null || number == '.' || number == "")
            number = 0.00;

        var Num = number;
        var finalCurrencyObj = null;
        if (number != undefined) {
            var decimalcharacter = ".";

            var thousandseparater = ",";
            if (IsThousandseparater == false)
                thousandseparater = "";
            else
                thousandseparater = ",";

            number = parseFloat(number);
            var sign = number < 0 ? "-" : "";

            var formatted = new String(number.toFixed(decimalplaces));
            if (decimalcharacter.length && decimalcharacter != ".") {
                formatted = formatted.replace(/\./, decimalcharacter);
            }
            var integer = "";
            var fraction = "";
            var strnumber = new String(formatted);
            var dotpos = decimalcharacter.length ?
                strnumber.indexOf(decimalcharacter) :
                -1;
            if (dotpos > -1) {
                if (dotpos) {
                    integer = strnumber.substr(0, dotpos);
                }
                fraction = strnumber.substr(dotpos + 1);
            } else {
                integer = strnumber;
            }
            if (integer) {
                integer = String(Math.abs(integer));
            }
            while (fraction.length < decimalplaces) {
                fraction += "0";
            }
            var temparray = new Array();
            while (integer.length > 3) {
                temparray.unshift(integer.substr(-3));
                integer = integer.substr(0, integer.length - 3);
            }
            temparray.unshift(integer);
            integer = temparray.join(thousandseparater);
            if (Num < 0) {
                if (CurrencySysmbolOnRight == true)
                    finalCurrencyObj = "(" + integer + decimalcharacter + fraction + " " + CurrencySign + ")";
                else
                    finalCurrencyObj = "(" + CurrencySign + integer + decimalcharacter + fraction + ")";
            } else {
                if (CurrencySysmbolOnRight == true)
                    finalCurrencyObj =
                    integer + decimalcharacter + fraction + " " + CurrencySign;
                else
                    finalCurrencyObj =
                    CurrencySign + integer + decimalcharacter + fraction;
            }
            return finalCurrencyObj;
        } else {
            if (CurrencySysmbolOnRight == true)
                return "0.00 " + CurrencySign;
            else
                return CurrencySign + " 0.00";
        }
    },


 
    
    CurrencyFormatText: function(number) {

        var decimalplaces = 2;
        var CurrencySysmbolOnRight = true;
        var IsThousandseparater = true;

        if (number != undefined && number != null && number == '.')
            number = 0.00;
        var Num = number;
        var finalCurrencyObj = null;
        var temp = number;


        if (
            number != undefined &&
            number != "0.00" &&
            number != null &&
            number != ""
        ) {

            var str2 = (number.toString()).replace(/\,/g, "");
            if (str2 != undefined && str2 != NaN) number = str2;


            var decimalcharacter = ".";
            var thousandseparater = ",";
            number = parseFloat(number);
            var sign = number < 0 ? "-" : "";

            var formatted = new String(number.toFixed(decimalplaces));
            if (decimalcharacter.length && decimalcharacter != ".") {
                formatted = formatted.replace(/\./, decimalcharacter);
            }
            var integer = "";
            var fraction = "";
            var strnumber = new String(formatted);
            var dotpos = decimalcharacter.length ?
                strnumber.indexOf(decimalcharacter) :
                -1;
            if (dotpos > -1) {
                if (dotpos) {
                    integer = strnumber.substr(0, dotpos);
                }
                fraction = strnumber.substr(dotpos + 1);
            } else {
                integer = strnumber;
            }
            if (integer) {
                integer = String(Math.abs(integer));
            }
            while (fraction.length < decimalplaces) {
                fraction += "0";
            }
            var temparray = new Array();
            while (integer.length > 3) {
                temparray.unshift(integer.substr(-3));
                integer = integer.substr(0, integer.length - 3);
            }
            temparray.unshift(integer);
            integer = temparray.join(thousandseparater);

            if (Num < 0)
                finalCurrencyObj = "(" + integer + decimalcharacter + fraction + ")";


            else finalCurrencyObj = integer + decimalcharacter + fraction;


            return finalCurrencyObj;
        } else {
            return "0.00";
        }
    },

    // Application Configuration MethodOfRounding
    MethodOfRounding: function(num) {
        var Data = JSON.parse($window.sessionStorage.getItem("AppCofigData"));
        var roundid = Data.MethodOfRounding.Id;
        var Result = num;
        var decpoint = Data.DecimalPoint;

        if (Result != undefined) {
            if (
                Data != null &&
                Data != undefined &&
                num != null &&
                num != undefined
            ) {
                if (roundid > 0) {
                    if (roundid === 2) {
                        Result = Math.round(num * 500) / 500;
                    } else if (roundid === 3) {
                        Result = Math.round(num * 1000) / 1000;
                    } else if (roundid === 5) {
                        Result = Math.round(num / 10) * 10;
                    } else if (roundid === 4) {
                        Result = Math.round(num);
                    }
                } else {
                    Result = num;
                }

                if (decpoint > 0) {
                    Result = parseFloat(Result).toFixed(decpoint);
                } else {
                    Result = parseFloat(Result).toFixed(2);
                }
            } else {
                Result = parseFloat(Result).toFixed(2);
            }

            if (Result == "NaN") {
                Result = null;
            }
        } else {
            Item = null;
        }

        return Result;
    },

    // Application Configuration Currency Symbol On Right Function
    CurrencySymbolOnRight: function(Currency) {
        var Data = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var IsRightSide = Data.IsCurrencySymbolOnRight;

        var IsSymbol = Currency.substr(Currency.length - 1);

        if (isNaN("IsSymbol")) {}

        if (IsRightSide) {
            Currency = Currency + " " + Data.BaseCurrency.Symbol;
        } else {
            Currency = Data.BaseCurrency.Symbol + " " + Currency;
        }

        return Currency;
    },

    CurrencyCode: function() {
        var Currency;
        var Data = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        Currency = Data.BaseCurrency.Code;
        return Currency;
    },

  
    commaseperator: function(value) {
        data = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return data;
    },

    ///End code for filter amount and string

    getDateOnly: function(datetime) {
        var dateNeeded = datetime.getFullYear();
        var date = new Date(
            datetime.getFullYear(),
            datetime.getMonth(),
            datetime.getDate()
        );
        return date;
    },

    //Get past 7 days date range
    getPastSevenDays: function() {
        var today = new Date();
        var sevenDaysAgo = new Date().setDate(today.getDate() - 7);

        return sevenDaysAgo;
    },

    SetTime(date) {
        if (this.IsNotNullOrEmptyOrUndefined(date)) {
            date = new Date(date)
            date.setHours(new Date().getHours());
            date.setMinutes(new Date().getMinutes());
            date.setSeconds(new Date().getSeconds());
            return date;
        }
    },

    // get Current weeks date range
    getThisWeek: function() {
        var curr = new Date();
        var first = curr.getDate() - curr.getDay();
        var last = first + 6;
        var firstday = new Date(curr.setDate(first)); //.toUTCString();
        var lastday = new Date(curr.setDate(last)); //.toUTCString();
        return [firstday, lastday];
    },

    // Get current month date range
    getThisMonth: function() {
        var date = new Date();
        var StartDate = new Date(date.getFullYear(), date.getMonth(), 1);
        var EndDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return [StartDate, EndDate];
    },

    DifferenceDate: function(sdate, tdate) {
        if (sdate != null && tdate != null)
            return parseInt((tdate - sdate) / (1000 * 60 * 60 * 24), 10) + 1;
    },


    getDateFormatWithEmptyTime: function(d) {
        d = new Date(d);
        d = d
            .toISOString()
            .substr(0, 19)
            .replace("T", " ");
        return d;
    },

    CheckforNull: function(inputvalue) {
        if (inputvalue == undefined || inputvalue == null || inputvalue == "null")
            inputvalue = '';
        return inputvalue;
    },

   
    pageNumberReplace: function(currentPage, pageCount) {

        var AppData = JSON.parse($window.sessionStorage.getItem("AppCofig"));
        var Format = (AppData.PageNumberFormat.Format != null || AppData.PageNumberFormat.Format != undefined) ? AppData.PageNumberFormat.Format : '';

        var str = Format;
        str = str.toString();
        if (str == 'Page x of y') {
            var result = str.replace(/x/, currentPage);
            result = result.replace(/y/, pageCount);
        } else if (str == 'none' || str == '') {
            result = '';
        } else {
            var result = str.replace(/NO/, currentPage);
        }
        return result
    },

   

   

    toTime: function(timeString) {
        var timeTokens = timeString.split(':');
        return new Date(1970, 0, 1, timeTokens[0], timeTokens[1], timeTokens[2]);
    },

    Roundingtwodigits(data) {
        return data.toFixed(2);
    },

    
    GetSession: function(key) {
        return sessionStorage.getItem(key);
    },

    SetSession: function(key, Value) {
        sessionStorage.setItem(key, Value);
    },

    RemoveSession: function(key) {
        sessionStorage.removeItem(key);
    },

    RemoveAllSession: function() {
        sessionStorage.clear();
    },

    GetFromLocalStorage: function(key) {
        return localStorage.getItem(key);
    },

    SetToLocalStorage: function(key, Value) {
        localStorage.setItem(key, Value);
    },

    RemoveFromLocalStorage: function(key) {
        localStorage.removeItem(key);
    },

    ReturnValueOrEmpty: function(src) {
        return (src != null || src != undefined) ? src : '';
    },

    UniquieList: function(List) {
        return List.filter((x, i, a) => a.indexOf(x) == i);
    },

    AddSpace: function(data) {
        if (data != null && data != undefined && data != "") {
            data = data.replace(/([A-Z])/g, ' $1').trim()
        }
        return data;
    },

   

    TabToggle: function(TabInfo) {
        angular.forEach(TabInfo.TabDetails, function(key, value) {
            if (TabInfo.SelectedTabIndex == key.TabIndex) {
                key.IsTabEnabled = true;
            } else {
                key.IsTabEnabled = false;
            }
        });
        return TabInfo;
    },


    isEqual: function(value, other) {

        // ...

        // Compare properties
        if (type === '[object Array]') {
            for (var i = 0; i < valueLen; i++) {
                if (compare(value[i], other[i]) === false) return false;
            }
        } else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    if (compare(value[key], other[key]) === false) return false;
                }
            }
        }

        // If nothing failed, return true
        return true;

    },

    ConverAmounttooWords: function(totalAmount) {

        var totalAmountInWords = '';
        var junkVal = totalAmount;
        junkVal = Math.floor(junkVal);
        var number = new String(junkVal);

        if (typeof number === 'string') {
            number = parseInt(number, 10);
        }

        var digits = number.split('');
        while (digits.length % 3 !== 0) {
            digits.unshift('0');
        }

        var digitsGroup = [];
        var numberOfGroups = digits.length / 3;
        for (var i = 0; i < numberOfGroups; i++) {
            digitsGroup[i] = digits.splice(0, 3);
        }

        var digitsGroupLen = digitsGroup.length;

        var numTxt = [
            [null, " One", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine"], //hundreds
            [null, ' Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'], //tens
            [null, " One", " Two", " Three", " Four", " Five", " Six", " Seven", " Eight", " Nine"] //ones
        ];
        var tenthsDifferent = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];


        for (var j = 0; j < digitsGroupLen; j++) {
            for (var k = 0; k < 3; k++) {
                var currentValue = digitsGroup[j][k];
                digitsGroup[j][k] = numTxt[k][currentValue];
                if (k === 0 && currentValue !== '0') {
                    digitsGroup[j][k] += ' Hundred ';
                } else if (k === 1 && currentValue === '1') {
                    digitsGroup[j][k] = tenthsDifferent[digitsGroup[j][2]];
                    digitsGroup[j][2] = 0;
                }
            }
        }

        for (var l = 0; l < digitsGroupLen; l++) {
            if (digitsGroup[l][1] && digitsGroup[l][2]) {
                digitsGroup[l][1] += ' ';
            }
            digitsGroup[l].filter(function(e) {
                return e !== null
            });
            digitsGroup[l] = digitsGroup[l].join('');
        }

        var posfix = [null, 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion'];
        if (digitsGroupLen > 1) {
            var posfixRange = posfix.splice(0, digitsGroupLen).reverse();
            for (var m = 0; m < digitsGroupLen - 1; m++) {
                if (digitsGroup[m]) {
                    digitsGroup[m] += ' ' + posfixRange[m];
                }
            }
        }

        var Newvalue = digitsGroup.join(' ');

        if (Newvalue != "")
            totalAmountInWords = (digitsGroup.join(' ')) + " Only ";
        else
            totalAmountInWords = '';

        return totalAmountInWords;
    },

    // // service error callback apply for common methods - Developed by Mani @21-9-2018
    // //eg. -> Utility.ServiceErrorCallback($scope.Issue.TranscationAdd)
    // ServiceErrorCallback: function (Page) {
    //     clearTimeout(Page.DataModel.UIData.Savetimer);
    //     this.SessionTimeout(Page);
    //     Page.PageLoadStatus = 'none';
    //     toaster.error(ServiceUnavailableError);
    // },


    // service error callback apply for common methods
    //eg. -> Utility.ServiceErrorCallback($scope.Issue.TranscationAdd)
    ServiceErrorCallback: function(response, Page) {
        clearTimeout(Page.DataModel.UIData.Savetimer);
        this.SessionTimeout(Page);
        Page.PageLoadStatus = 'none';
        this.ResponceErrorMessage(response);
    },

    // to show error message based on response status
    ResponceErrorMessage: function(response) {
        switch (response.status) {
            case 404:
                toaster.error(NotFoundError);
                break;
            case -1:
                toaster.error(ServiceUnavailableError);
                break;
            default:
                toaster.info(NoResponseInTime);
                break;
        }
    },

    // session remainder call for common methods - Developed by Mani @21-9-2018
    //eg. -> Utility.SessionTimeout($scope.Issue.TranscationAdd)
    SessionTimeout: function(Page) {
        Page.SessionInfo.SessionTimeout = true;
        this.SetSession('SessionData', JSON.stringify(Page.SessionInfo));
    },


    // Page loader start call for common methods - Developed by Mani @21-9-2018
    //eg. -> Utility.startLoader($scope.Issue.TranscationAdd)
    startLoader: function(Page) {
        Page.DataModel.UIData.Savetimer = setTimeout(function() {
            if (Page.PageLoadStatus == 'block') {
                Page.PageLoadStatus = 'none';
                toaster.info(NoResponseInTime);
            }
        }, Page.SessionInfo.AppConfig.LoaderTime);
    },

   
    //For Stop the loader while response not come - Developed by Mani @21-9-2018
    //eg. -> Utility.StopTimer($scope.Issue.TranscationAdd.DataModel.UIData.Savetimer)
    StopTimer: function(timeOut) {
        clearTimeout(timeOut);
    },

    UITabToggle: function(TabInfo, Selected) {

        angular.forEach(TabInfo.TabDetails, function(key, value) {
            if (key.Name == Selected) {
                key.IsTabEnabled = true;
            } else {
                key.IsTabEnabled = false;
            }
        });

    },


    //priority (high,medium,low)
    //
    //

    ErrorMessage: function(error, priority) {

        if (priority == "high") {
            toaster('Error', error);
        } else if (priority == "medium") {
            toaster('info', error);
        } else if (priority == "low") {
            toaster('info', error);
        } else {


        }
    },

 


    //#region ----------------------------------PDF---Functionality ---AREA------------------------------------------------
    //#region Pdf Common-Margin


    resizeBase64Img: function(base64) {

        var canvas = document.createElement("canvas");
 

        var context = canvas.getContext("2d");

        var deferred = $.Deferred();

        $("<img/>").attr("src", base64).load(function() {

            context.scale(100 / this.width, 100 / this.height);

            context.drawImage(this, 0, 0);

            deferred.resolve($("<img/>").attr("src", canvas.toDataURL()));

        });

        return deferred.promise();

    },


 
  
 
    DocumentValidater: function(DocumentType, ReferenceNumber) {
        var result = false;

        switch (DocumentType) {
            case "GSTIN":
                result = this.GSTIN_Validater(ReferenceNumber);
                break;
        }
        return result;
    },





    GSTIN_Validater: function(DocRefNo) {
        var gstin = /^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[0-9a-zA-Z]{1}[0-9a-zA-Z]{1})+$/;
        return (!this.IsNotNullOrEmptyOrUndefined(DocRefNo)) ? false : (gstin.test(DocRefNo)) ? true : false;
    },



    Password_validator: function(Password) {

        var result = false;
        console.log("test");
        // var Small = /[a-z]+/;
        // var Caps = /[A-Z]+/;
        // var min = /.{8,}/;
        // var num = /[0-9]+/;
        var special = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        // var special =  /^[!@#\$%\^\&*\)\(+=._-]+/;
        // if (Small.test(Password) && Caps.test(Password) && min.test(Password) && num.test(Password) && special.test(Password))
        if (special.test(Password))
            result = true;
        else
            result = false;

        return result;
    },

    Password_Validater: function(Password) {
        var result = false;
        var special = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (special.test(Password))
            result = true;
        else
            result = false;

        return result;
    },

 

 
    // when double quote replace to para symbol
    escape: function(data) {
        if (data != null && data != undefined && data != '' && data != 'null') {
            return data = data.replace(/"/g, "¶");
        }
    },


    // when double quote replace to para symbol
    ClearAutoComplete: function(ControlId) {
        document.getElementById(ControlId).value = null;
    },

    // when para symbol replace to double quote and new Break line apply
    unescape: function(data) {

        if (data != null && data != undefined && data != '' && data != 'null') {
            return data.replace(new RegExp('¶', 'g'), '"');
        } else {
            return data;
        }
    },

    daysbetween(date1, date2) {

        if (!date1)
            date1 = new Date();
        if (!date2)
            date1 = new Date();

        date1 = new Date(date1);
        date2 = new Date(date2);

        var DateOneDate = date1.getDate();
        var DateOneMonth = date1.getMonth();
        var DateOneYear = date1.getFullYear();

        var DateOne = new Date(DateOneYear, DateOneMonth, DateOneDate);

        var DateTwoDate = date2.getDate();
        var DateTwoMonth = date2.getMonth();
        var DateTwoYear = date2.getFullYear();

        var DateTwo = new Date(DateTwoYear, DateTwoMonth, DateTwoDate);

        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24

        // Convert both dates to milliseconds
        var date1_ms = DateOne.getTime()
        var date2_ms = DateTwo.getTime()

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms)

        // Convert back to days and return
        return Math.round(difference_ms / ONE_DAY)

    },
 
 

  
    DecimalRestrict: function($event, attr) {

        let keyCode = $event.keyCode ? $event.keyCode : $event.which;
        if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || attr.indexOf(".") != -1)) {
            $event.preventDefault();
        }
        if (attr != null && attr.indexOf(".") > -1 && attr.split(".")[1].length > 1) {
            $event.preventDefault();
        }
    },

    sortObject: function(data) {
        console.log("sort");
        //   Object.keys(data).forEach(function (key) {
        //     var value = data[key];
        //     newObject[key] = value * value;
        // });
        var keys = Object.keys(data);
        var result = {};

        keys.sort();

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            result[key] = data[key];
        }

        return result;
    },

    stringsort: function(str) {
        var i = 0,
            j;
        while (i < str.length) {
            j = i + 1;
            while (j < str.length) {
                if (str[j] < str[i]) {
                    var temp = str[i];
                    str[i] = str[j];
                    str[j] = temp;
                }
                j++;
            }
            i++;
        }
    },

    decimalToNear: function(number) {
        console.log("number");
        number = Math.floor(number);
        return number;
    },

    convertToThousandSeparator: function(number) {
        console.log("convertToThousandSeparator");
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    //#endregion

   

    getnull: function(data) {
        if (data == null)
            data = "";

        return data;

    },
    updateOptions: function(chartId, chartOption) {
        ApexCharts.exec(chartId, 'updateOptions', chartOption, false, true);
    },

    updateSeries: function(chartId, Series) {
        ApexCharts.exec(chartId, 'updateSeries', Series, true);
    },

    SetFocus: function(id) {
        document.getElementById(id).focus();
    }

};
