const moment = require('moment');

class DataHelper {
    constructor(locale = 'vi-VN', currency = 'VND') {
        this.locale = locale;
        this.currency = currency;
    }

    formatCurrency(amount) {
        if (isNaN(amount)) return '0 ₫';
        return new Intl.NumberFormat(this.locale, {
            style: 'currency',
            currency: this.currency,
            minimumFractionDigits: 0
        }).format(amount);
    }

    formatPhone(phone) {
        if (!phone) return '';
        phone = phone.replace(/\D/g, '');
        if (phone.startsWith('84')) phone = '0' + phone.slice(2);
        if (phone.startsWith('+84')) phone = '0' + phone.slice(3);
        return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    }

    formatISODate(date) {
        if (!date) return '';
        return new Date(date).toISOString();
    }

    formatDate(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString(this.locale);
    }

    calculateStayDays(startDate, endDate) {
        if (!startDate || !endDate) return 0;
        const diff = new Date(endDate) - new Date(startDate);
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    removeUnicode(str) {
        if (!str)
            return '';

        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d").replace(/Đ/g, "D")
            .replace(/[^\w\s]/gi, "")
            .toLowerCase();
    }
}

module.exports = new DataHelper();