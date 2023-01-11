<template>
    <div class="admin-cabinet">
        <div class="admin-cabinet__inner">
            <h2>Управление кабинетом</h2>
            <div class="">

            </div>
            <div class="project-details">
                <div class="project-details__inner">
                    <div class="project-details__content">
                        <!--<div class="project-details__main">
                            <div class="project-details__item">
                                <div class="project-details__header">
                                    Сумма финансирования
                                </div>
                                <div class="project-details__sum">
                                    30000 тг
                                </div>
                            </div>
                            <div class="project-details__item">
                                <div class="project-details__header">
                                    Основной долг
                                </div>
                                <div class="project-details__sum">
                                    31000 тг
                                </div>
                            </div>
                            <div class="project-details__item">
                                <div class="project-details__header">
                                    Товар на складе на сумму
                                </div>
                                <div class="project-details__sum">
                                    30000 тг
                                </div>
                            </div>
                            <div class="project-details__item">
                                <div class="project-details__header">
                                    заработано за период
                                </div>
                                <div class="project-details__sum">
                                    30000 тг
                                </div>
                            </div>
                        </div>-->
                        
                        <div class="project-details__tables">
                            <ul class="table-tabs">
                                <li class="first-tab" @click="financing = true, warehouse = false, shipments = false, earnings = false, activeEl = 1" :class="{'active-el': activeEl === 1}">Финансирование</li>
                                <li @click="financing = false, warehouse = true, shipments = false, earnings = false, activeEl = 2" :class="{'active-el': activeEl === 2}">Склад</li>
                                <li @click="financing = false, warehouse = false, shipments = true, earnings = false, activeEl = 3" :class="{'active-el': activeEl === 3}">Отгрузки</li>
                                <li class="last-tab" @click="financing = false, warehouse = false, shipments = false, earnings = true, activeEl = 4" :class="{'active-el': activeEl === 4}">Заработок</li>
                            </ul>
                            <form @submit="SubmitFinance()" v-if="financing == true">
                                <div class="admin-cabinet__inputs">
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Сумма долга</label></div>
                                            <div class=""><input v-model.trim="financingDebtAmount" type="text" ></div>
                                            <!-- <p v-if="$v.financingDebtAmount.$dirty && !$v.financingDebtAmount.required" class="invalid-feedback">Обязательное поле для заполнения</p> -->
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Сумма прихода</label></div>
                                            <div class=""><input v-model.trim="financingIncomeAmount" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Дата</label></div>
                                            <div class=""><input v-model.trim="financingDate" type="date"></div>
                                        </div>
                                    </div>
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Источник средств</label></div>
                                            <div class=""><input v-model.trim="financingSourceOfFunds" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Остаток долга</label></div>
                                            <div class=""><input v-model.trim="financingBalanceOwnded" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Статус долга</label></div>
                                            <div class="">
                                                <select v-model.trim="financingDebtStatus" type="text">
                                                    <option :value="true">Открыт</option>
                                                    <option :value="false">Закрыт</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="button admin-cabinet__button">Сохранить</button>
                            </form>
                            <form @submit="SubmitWarehouse()" v-if="warehouse == true">
                                <div class="admin-cabinet__inputs">
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Артикул</label></div>
                                            <div class=""><input v-model="warehouseVendorCode" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Наименование товара</label></div>
                                            <div class=""><input v-model="warehouseProductName" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Цена товара</label></div>
                                            <div class=""><input v-model="warehouseVendorPrice" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Единица измерения</label></div>
                                            <div class=""><input v-model="warehouseUnit" type="text"></div>
                                        </div>
                                    </div>
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Кол-во</label></div>
                                            <div class=""><input v-model="warehouseAmount" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Дата поступления на склад</label></div>
                                            <div class=""><input v-model="warehouseDate" type="date"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Остаток на складе кол-во</label></div>
                                            <div class=""><input v-model="warehouseStockBalance" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Цена</label></div>
                                            <div class=""><input v-model="warehousePrice" type="text"></div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="button admin-cabinet__button">Сохранить</button>
                            </form>
                            <form @submit="SubmitShipment()" v-if="shipments == true">
                                <div class="admin-cabinet__inputs">
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Закупочная цена товара</label></div>
                                            <div class=""><input v-model="shipmentPurchasePrice" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Цена продажи</label></div>
                                            <div class=""><input v-model="shipmentSellingPrice" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Отгружено, кол-во</label></div>
                                            <div class=""><input v-model="shipmentShippedAmount" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Отгружено на сумму</label></div>
                                            <div class=""><input v-model="shipmentShippedSum" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Получатель груза</label></div>
                                            <div class=""><input v-model="shipmentCargoReceiver" type="text"></div>
                                        </div>
                                    </div>
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">№ ТТН</label></div>
                                            <div class=""><input v-model="shipmentTTH" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">№ Счета</label></div>
                                            <div class=""><input v-model="shipmentAccountNumber" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Получено cредств</label></div>
                                            <div class=""><input v-model="shipmentFundsReceived" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Комиссия FullFilment</label></div>
                                            <div class=""><input v-model="shipmentFullFillmentComission" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Заработок</label></div>
                                            <div class=""><input v-model="shipmentEarnings" type="text"></div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="button admin-cabinet__button">Сохранить</button>
                            </form>
                            <form @submit="SubmitEarnings()" v-if="earnings == true">
                                <div class="admin-cabinet__inputs">
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">ТТН</label></div>
                                            <div class=""><input v-model="earningTTH" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Сумма прихода по отгруженному товару</label></div>
                                            <div class=""><input v-model="earningShippingReceiptAmount" type="text"></div>
                                        </div>
                                    </div>
                                    <div class="admin-cabinet__column">
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Комиссия Фулфимлента %</label></div>
                                            <div class=""><input v-model="earningFullFillmentComission" type="text"></div>
                                        </div>
                                        <div class="admin-cabinet__input">
                                            <div class=""><label for="">Заработок</label></div>
                                            <div class=""><input v-model="earningEarning" type="text"></div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="button admin-cabinet__button">Сохранить</button>
                            </form>
                            <div v-if="financing == true" class="project-details__financing">
                                <h3>Платежи по долгу</h3>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Сумма долга</th>
                                            <th>Сумма прихода</th>
                                            <th>Дата</th>
                                            <th>Источник средств</th>
                                            <th>Остаток долга</th>
                                            <th>Статус долга</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="finance in financingData" :key="finance.id">
                                            <td>{{finance.debt_amount}}</td>
                                            <td>{{finance.income_amount}}</td>
                                            <td>{{finance.date}}</td>
                                            <td>{{finance.source_of_funds}}</td>
                                            <td>{{finance.balance_owed}}</td>
                                            <td v-if="finance.debt_status == true">открыт</td>
                                            <td v-if="finance.debt_status == false">закрыт</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <table v-if="warehouse == true" class="table">
                                <thead>
                                    <tr>
                                        <th>Артикул</th>
                                        <th>Наименование товара</th>
                                        <th>Цена товара</th>
                                        <th>Единица измерения</th>
                                        <th>Кол-во</th>
                                        <th>Дата поступления на скалд</th>
                                        <th>Остаток на складе кол-во</th>
                                        <th>цена</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="warehouse in warehouseData" :key="warehouse.id">
                                            <td>{{warehouse.vendor_code}}</td>
                                            <td>{{warehouse.product_name}}</td>
                                            <td>{{warehouse.product_price}}</td>
                                            <td>{{warehouse.unit}}</td>
                                            <td>{{warehouse.amount}}</td>
                                            <td>{{warehouse.date}}</td>
                                            <td>{{warehouse.stock_balance}}</td>
                                            <td>{{warehouse.price}}</td>
                                        </tr>
                                </tbody>
                            </table>
                            <table v-if="shipments == true" class="table">
                                <thead>
                                    <tr>
                                        <th>Закупочная цена товара</th>
                                        <th>Цена продажи</th>
                                        <th>Отгружено, кол-во</th>
                                        <th>Отгружено на сумму</th>
                                        <th>Получатель груза</th>
                                        <th>№ ТТН</th>
                                        <th>№ Счета</th>
                                        <th>Получено редств</th>
                                        <th>Комиссия FullFilment</th>
                                        <th>Заработок</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="shipment in shipmentsData" :key="shipment.id">
                                            <td>{{shipment.purchase_price}}</td>
                                            <td>{{shipment.selling_price}}</td>
                                            <td>{{shipment.shipped_amount}}</td>
                                            <td>{{shipment.shipped_sum}}</td>
                                            <td>{{shipment.cargo_receiver}}</td>
                                            <td>{{shipment.TTH}}</td>
                                            <td>{{shipment.account_number}}</td>
                                            <td>{{shipment.funds_received}}</td>
                                            <td>{{shipment.fulfilment_commission}}</td>
                                            <td>{{shipment.earnings}}</td>
                                        </tr>
                                </tbody>
                            </table>
                            <table v-if="earnings == true" class="table">
                                <thead>
                                    <tr>
                                        <th>ТТН</th>
                                        <th>Сумма прихода по  отгруженному товару</th>
                                        <th>Комиссия Фулфимлента 8%</th>
                                        <th>Заработок </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="earning in earningsData" :key="earning.id">
                                            <td>{{earning.TTH}}</td>
                                            <td>{{earning.shipping_receipt_amount}}</td>
                                            <td>{{earning.fullfilment_commission}}</td>
                                            <td>{{earning.earning}}</td>
                                        </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
    data: () => ({
        activeEl: 0,
        financing: false,
        warehouse: false,
        shipments: false,
        earnings: false,
        financingData: [],
        warehouseData: [],
        shipmentsData: [],
        earningsData: [],

        financingDebtAmount: '',
        financingIncomeAmount: '',
        financingDate: '',
        financingSourceOfFunds: '',
        financingBalanceOwnded: '',
        financingDebtStatus: '',

        warehouseVendorCode: '',
        warehouseProductName: '',
        warehouseVendorPrice: '',
        warehouseUnit: '',
        warehouseAmount: '',
        warehouseDate: '',
        warehouseStockBalance: '',
        warehousePrice: '',

        shipmentPurchasePrice: '',
        shipmentSellingPrice: '',
        shipmentShippedSum: '',
        shipmentShippedAmount: '',
        shipmentCargoReceiver: '',
        shipmentTTH: '',
        shipmentAccountNumber: '',
        shipmentFundsReceived: '',
        shipmentFullFillmentComission: '',
        shipmentEarnings: '',

        earningTTH: '',
        earningShippingReceiptAmount: '',
        earningFullFillmentComission: '',
        earningEarning: ''
    }),
    // validations: {
    //     financingDebtAmount: {required},
    //     financingIncomeAmount: {required},
    //     financingDate: {required},
    //     financingSourceOfFunds: {required},
    //     financingBalanceOwnded: {required},
    //     financingDebtStatus: {required},

    //     warehouseVendorCode: {required},
    //     warehouseProductName: {required},
    //     warehouseVendorPrice: {required},
    //     warehouseUnit: {required},
    //     warehouseAmount: {required},
    //     warehouseDate: {required},
    //     warehouseStockBalance: {required},
    //     warehousePrice: {required},

    //     shipmentPurchasePrice: {required},
    //     shipmentSellingPrice: {required},
    //     shipmentShippedSum: {required},
    //     shipmentShippedAmount: {required},
    //     shipmentCargoReceiver: {required},
    //     shipmentTTH: {required},
    //     shipmentAccountNumber: {required},
    //     shipmentFundsReceived: {required},
    //     shipmentFullFillmentComission: {required},
    //     shipmentEarnings: {required},

    //     earningTTH: {required},
    //     earningShippingReceiptAmount: {required},
    //     earningFullFillmentComission: {required},
    //     earningEarning: {required}
    // },
    methods:{
        getProjectDetails(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/borrower/financing/' + localStorage.getItem('id'),
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.financingData = response.data.finance
                this.warehouseData = response.data.warehouse
                this.shipmentsData = response.data.shipment
                this.earningsData = response.data.earning
                console.log(response.data)
                
            }) 
        },
        SubmitFinance(){
                axios.post('http://127.0.0.1:8000/api/v1/admin/borrower/financing-save/',
                    {
                        project: localStorage.getItem('id'),
                        debt_amount: this.financingDebtAmount,
                        income_amount: this.financingIncomeAmount,
                        date: this.financingDate,
                        source_of_funds: this.financingSourceOfFunds,
                        balance_owed: this.financingBalanceOwnded,
                        debt_status: this.financingDebtStatus
                    },
                    {
                        headers:{
                            Authorization: 'Token ' + localStorage.getItem('usertoken')
                        }
                    }
                ).then((response) => {
                    this.getProjectDetails()
                })
            
        },
        SubmitWarehouse(){
            axios.post('http://127.0.0.1:8000/api/v1/admin/borrower/warehouse-save/',
                    {
                        project: localStorage.getItem('id'),
                        vendor_code: this.warehouseVendorCode,
                        product_name: this.warehouseProductName,
                        product_price: this.warehouseVendorPrice,
                        unit: this.warehouseUnit,
                        amount: this.warehouseAmount,
                        date: this.warehouseDate,
                        stock_balance: this.warehouseStockBalance,
                        price: this.warehousePrice
                    },
                    {
                        headers:{
                            Authorization: 'Token ' + localStorage.getItem('usertoken')
                        }
                    }
                ).then((response) => {
                    this.getProjectDetails()
                })
        },
        SubmitShipment(){
            axios.post('http://127.0.0.1:8000/api/v1/admin/borrower/shipment-save/',
                    {
                        project: localStorage.getItem('id'),
                        purchase_price: this.shipmentPurchasePrice,
                        selling_price: this.shipmentSellingPrice,
                        shipped_sum: this.shipmentShippedSum,
                        shipped_amount: this.shipmentShippedAmount,
                        cargo_receiver: this.shipmentCargoReceiver,
                        TTH: this.shipmentTTH,
                        account_number: this.shipmentAccountNumber,
                        funds_received: this.shipmentFundsReceived,
                        fulfilment_commission: this.shipmentFullFillmentComission,
                        earnings: this.shipmentEarnings
                    },
                    {
                        headers:{
                            Authorization: 'Token ' + localStorage.getItem('usertoken')
                        }
                    }
                ).then((response) => {
                    this.getProjectDetails()
                })
        },
        SubmitEarnings(){
            axios.post('http://127.0.0.1:8000/api/v1/admin/borrower/earning-save/',
                    {
                        project: localStorage.getItem('id'),
                        TTH: this.earningTTH,
                        shipping_receipt_amount: this.earningShippingReceiptAmount,
                        fullfilment_commission: this.earningFullFillmentComission,
                        earning: this.earningEarning
                    },
                    {
                        headers:{
                            Authorization: 'Token ' + localStorage.getItem('usertoken')
                        }
                    }
                ).then((response) => {
                    this.getProjectDetails()
                })
        }
    },
    mounted(){
        this.getProjectDetails()
    }
    // watch(){
    //     this.getProjectDetails(),
    //     this.SubmitFinance()
    // }
}
</script>


<style lang="scss" scoped>
.project-details {

		&__inner {
		}

		&__content {
            margin: 50px 0 0 0
		}

		&__main {
            display: flex;
            justify-content: space-between;
		}

		&__item {
            padding: 26px 32px;
            background: #fff;
            border: 1px solid #0345FF;
            border-radius: 10px;
            width: 250px;
            text-align: center;
		}

		&__header {
            font-size: 17px;
            font-weight: 500;
            height: 50px;
		}

		&__sum {
            font-size: 36px;
            font-weight: 500;
            color: #1d81dd;
		}
}
.table-tabs {
    display: flex;
    justify-content: center;
    margin: 30px 0 0 0;
    font-size: 16px;
    font-weight: 500;
    background: #fff;
    li{
        
        cursor: pointer;
        padding: 10px;
        border: 2px solid #0345FF;
    }
}

.table {

	width: 100%;

	margin-bottom: 20px;

	border: 1px solid #dddddd;

	border-collapse: collapse; 
    margin-top: 40px;
}

.table th {

	font-weight: bold;

	padding: 15px;
    font-size: 16px;
	background: #0345FF;
    color: #fff;
	border: 5px solid #0345FF;

}

.table td {

	border: 5px solid #fff;
    background: #fff;
	padding: 15px;
    text-align: center;
}

.project-details__financing{
    margin: 20px 0 0 0;
}

.first-tab{
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}
.last-tab{
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
}
.active-el{
    background: #0345FF;
    color: #FFFFFF;
}

.admin-cabinet {

		&__inputs {
            display: flex;
            justify-content: space-around;
		}

		&__column {
            flex: 0 1 50%;
		}

		&__input {
            display: flex;
            align-items: center;
            margin: 20px 0 0 0;
            label{
                font-size: 18px;
                font-weight: 500;
            }
            input{
                background: #FFFFFF;
                box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
                border-radius: 10px;
                height: 50px;
                width: 200px;
                margin-left: 15px;
                padding: 10px;
            }
            select{
                width: 100px;
                height: 40px;
                padding: 10px;
                margin-left: 15px;
            }
		}
}

.admin-cabinet__button{
    padding: 10px;
    margin: 10px 0 0 0;
}

.invalid{
        border-bottom: 0.5px solid #ff0000;
    }
.invalid-feedback{
        color: #ff0000;
}
</style>