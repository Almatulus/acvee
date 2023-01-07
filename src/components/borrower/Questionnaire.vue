<template>
    <div class="questionnaire__wrapper">
        <div class="modal__wrapper">
                <div v-if="modal" class="scoring__modal">
                    <h3>ПРЕДЛОЖЕНИЕ СТАТЬ УЧАСТНИКОМ КОНСОРЦИУМА</h3>
                    <h3>(НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ)</h3>
                    <div class="scoring__text">
                        <p>
                            Краудфакторинговая компания Acvee Finance настоящим предлагает направлять оферты о волеизъявлении стать участником краудфакторингого консорциума, основанного на финансировании частными лицами сделок по поставке товаров на условиях отсрочки платежа на следующих условиях:
                        </p>
                        <ul>
                            <li>
                                <span>a)</span>	управление консорциумом поручается компании Acvee Finance, c правом заключения сделок с третьими лицами на условиях и по усмотрению компании Acvee Finance, подписания любых документов, касающихся производственной, финансово-хозяйственной деятельности консорциума, представления интересов консорциума в различных государственных, финансовых, банковских, коммерческих и других организациях, как в Республике Казахстан, так и за ее пределами, осуществлением любых других действий, в том числе юридических в интересах совместной деятельности. При этом участники консорциума сохраняют полную юридическую самостоятельность и реквизиты;
                            </li>
                            <li>
                                <span>b)</span>	участник обязуется передать во исполнение совместных усилий компании Acvee Finance денежные средства в виде инвестиций в сроки, в размере, на условиях, и в целях, предусмотренных в договоре о консорциуме;
                            </li>
                            <li>
                                <span>c)</span>	инвестиции предоставляются для реализации инвестиционных проектов по финансированию факторинговых сделок, покупки инвойса, а также на управление денежными средствами. Под факторинговыми сделками понимаются сделки, финансируемые компанией Acvee Finance, по которым компания Acvee Finance приобретает право требовать погашения долга от заёмщиков, а равно требовать уступки имеющихся у них прав требования к третьим лицам. Возврат инвестиций осуществляется за счет оплаты товара конечными покупателями на счет Фулфилмент-центра, а равно за счет оплаты по договорам цессии дебиторами заёмщика на счет компании Acvee Finance;
                            </li>
                            <li>
                                <span>d)</span>	фулфилмент-центр – это партнёр и агент компании Acvee Finance: ТОО «Acvee Kazakhstan», которое оказывает компании услуги по получению товара покупателем товара, в том числе, но не ограничиваясь услугами по хранению товара, формированию, упаковке, отправке товаров покупателю посредством службы доставки;
                            </li>
                            <li>
                                <span>e)</span>	доли сторон в общей долевой собственности консорциума являются условными. Для определения долей может быть использована следующая релятивная формула:
                            </li>
                            <li>
                                <span>f)</span>	ОПУ2 = ОД – СФ – 4% - 8%.
                                    где:
                                    <ul style="margin-left: 10px;">
                                        <li>
                                            ОПУ2 - общая прибыль участников 2 по каждой сделке;
                                        </li>
                                        <li>
                                            ОД – основной долг;
                                        </li>
                                        <li>
                                            СФ – сумма финансирования;
                                        </li>
                                        <li>
                                            4% - вознаграждение компании Acvee Finance от суммы сделки;
                                        </li>
                                        <li>
                                            8% - вознаграждение Acvee Kazakhstan от суммы сделки.
                                        </li>
                                    </ul>

                            </li>
                            <li>
                               <span>g)</span>	заёмщики, с которыми компания Acvee Finance намерена заключить договоры факторинга перед заключением договоров проходят установленный скоринг, что максимально минимизирует инвестиционные риски участника.

                            </li>
                            <li>
                                <span>h)</span>	перед заключением договора финансирования (факторинга) заёмщик обязуется предоставить следующие документы:
                                <ul style="margin-left: 10px;">
                                    <li>•	договор поставки товаров с действующим покупателем товара с актами сверок за последние 6 (шесть) месяцев. </li>
                                    <li>•	заявку покупателя на закуп товара. </li>
                                    <li>•	договор поставки (закупа) товара, заключенный с производителем/дистрибьютером с актами сверок за последние 6 (шесть) месяцев. </li>
                                    <li>•	письменное согласие на проверку данных Клиента по всем государственным сервисам на благонадежность.</li>
                                </ul>
                            </li>
                            <li>
                                <span>i)</span>	в случае положительного одобрения заявки на финансирование заёмщика и получения положительной оценки вышеуказанных документов, заёмщик обязуется передать право требования по договору цессии существующую просроченную/непросроченную дебиторскую задолженность на сумму, запрашиваемую в заявке на финансирование, с дополнительной суммой по системе динамических наценок. 
                            </li>
                            <li>
                                <span>j)</span>	в случае если в течение указанного в договоре финансирования срока товар не будет реализован, и не будет предоставлено погашение вознаграждений участника, компания Acvee Finance сможет удовлетворить права сторон за счёт дебиторской задолженности заёмщика, путём взыскания дебиторской задолженности для покрытия всех затрат, в том числе комиссии компании Acvee Finance и его партнёра, суммы инвестиций и вознаграждение участника.
                            </li>
                            <li>
                                <span>k)</span>	любой спор, договорного или внедоговорного характера, вытекающий из договора о консорциуме или в связи с ним, включая любой вопрос, касающийся его существования, действительности или прекращения, подлежит исключительной юрисдикции суда Международного финансового центра «Астана». Языком, который будет использоваться в судебном разбирательстве, является английский.
                            </li>
                        </ul>
                    </div>
                    <a @click.prevent="hideModal()" class="modal__button button">
                        Я соглашаюсь со всеми условиями
                    </a>
                </div>
        </div>
        <div class="questionnaire">
            <div class="questionnaire__questions">
                <h2 class="questionnaire__title">
                    Анкета
                </h2>
                <form action="" @submit.prevent="submitHandler(form)" class="questionnaire__questions-form">
                    <input placeholder="Название ТОО\ИП" 
                    type="text" 
                    class="questionnaire__questions-input questionnaire__input"
                    v-model.trim="form.organizationName"
                    :class="$v.form.organizationName.$error ? 'questionnaire-input-invalid' : ''"
                    >
                    <p v-if="$v.form.organizationName.$dirty && !$v.form.organizationName.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                    
                    <input 
                    placeholder="Юридическая Форма ТОО/ИП/Ltd" 
                    type="text" 
                    class="questionnaire__questions-input questionnaire__input"
                    v-model.trim="form.legalFormOrganization"
                    :class="$v.form.legalFormOrganization.$error ? 'questionnaire-input-invalid' : ''"
                    >
                    <p v-if="$v.form.legalFormOrganization.$dirty && !$v.form.legalFormOrganization.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                    
                    <select 
                        type="choseCountry" 
                        class="questionnaire__questions-input questionnaire__input"
                        v-model="form.countryID"
                        :class="$v.form.countryID.$error ? 'questionnaire-input-invalid' : ''"
                    >
                        <option value="">Выберите страну</option>
                        <option v-for="country in COUNTRIES" :key="country.id" :value="country.id">{{country.name}}</option>
                    </select>
                    <p v-if="$v.form.countryID.$dirty && !$v.form.countryID.required" class="questionnaire-invalid-feedback">Обязательно для выбора</p>
                    
                    <select 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        v-model="form.cityID"
                        :class="$v.form.cityID.$error ? 'questionnaire-input-invalid' : ''">
                        <option value="">Выберите город</option>
                        
                        <option v-for="city in cities" :key="city.id" :value="city.id">{{city.name}}</option>
                    </select>
                    <p v-if="$v.form.cityID.$dirty && !$v.form.cityID.required" class="questionnaire-invalid-feedback">Обязательно для выбора</p>
                    
                    <input placeholder="БИН" 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        maxlength="12"
                        v-model.trim="form.BIN"
                        :class="$v.form.BIN.$error ? 'questionnaire-input-invalid' : ''"
                        @keypress="isNumber"
                    >
                    <p v-if="$v.form.BIN.$dirty && !$v.form.BIN.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                    <p v-if="$v.form.BIN.$dirty && !$v.form.BIN.minLength" class="questionnaire-invalid-feedback">Данное поле должно содержать 12 символов</p>

                    <input 
                        placeholder="ФИО Директора" 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        v-model.trim="form.directorName"
                        :class="$v.form.directorName.$error ? 'questionnaire-input-invalid' : ''"
                        @keypress="isLetter"
                    >
                    <p v-if="$v.form.directorName.$dirty && !$v.form.directorName.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>

                    <input 
                        placeholder="ИИН Директора" 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        maxlength="12"
                        v-model.trim="form.UIN"
                        :class="$v.form.UIN.$error ? 'questionnaire-input-invalid' : ''"
                        @keypress="isNumber"
                    >
                    <p v-if="$v.form.UIN.$dirty && !$v.form.UIN.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                    <p v-if="$v.form.UIN.$dirty && !$v.form.UIN.minLength" class="questionnaire-invalid-feedback">Данное поле должно содержать 12 символов</p>

                    <input placeholder="Контактный номер" 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        maxlength="16"
                        v-model.trim="form.phoneNumber"
                        :class="$v.form.phoneNumber.$error ? 'questionnaire-input-invalid' : ''"
                        v-imask="phoneNumberMask" 
                        @accept="onAccept" 
                        @complete="onComplete"
                        @keypress="isNumber"
                    >
                    <p v-if="$v.form.phoneNumber.$dirty && !$v.form.phoneNumber.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                    <p v-if="$v.form.phoneNumber.$dirty && !$v.form.phoneNumber.minLength" class="questionnaire-invalid-feedback">Данное поле должно содержать номер телефона</p>

                    <input 
                        placeholder="Электронная почта" 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        v-model.trim="form.email"
                        :class="$v.form.email.$error ? 'questionnaire-input-invalid' : ''"
                    >
                    <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                    <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="questionnaire-invalid-feedback">Данное поле должно содержать электронную почту</p>
                    <input 
                        v-model="form.businessDescription"
                        placeholder="Опишите ваш бизнес" 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input questionnaire-textarea">
                        
                </form>
            </div>
            <div class="questionnaire__loan">
                <form action="" @submit.prevent="submitHandler(form)" class="questionnaire__loan-form">
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-product-service">
                            <h3>Продукты и услуги</h3>
                            <div style="display: flex;" class="questionnaire__loan-product-service-content questionnaire__loan-content">
                                <div class="">
                                    <input 
                                    placeholder="Название" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.productName"
                                    :class="$v.form.productName.$error ? 'questionnaire-input-invalid' : ''"
                                    >
                                    <p v-if="$v.form.productName.$dirty && !$v.form.productName.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                                </div>
                                <div style="margin-left: 10px" class="">
                                    <input 
                                    placeholder="Цена" 
                                    class="questionnaire__input" 
                                    type="text"
                                    maxlength="8"
                                    v-model.trim="form.productPrice"
                                    @keypress="isNumber"
                                    :class="$v.form.productPrice.$error ? 'questionnaire-input-invalid' : ''"
                                    >
                                    <p v-if="$v.form.productPrice.$dirty && !$v.form.productPrice.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-revenue">
                            
                            <h3>Выручка за последние 12 месяцев</h3>
                            <div class="questionnaire__loan-revenue-content questionnaire__loan-content">
                                
                                <input 
                                    placeholder="Выручка" 
                                    class="questionnaire__input" 
                                    type="text"
                                    maxlength="10"
                                    v-model.trim="form.revenue"
                                    @keypress="isNumber"
                                    :class="$v.form.revenue.$error ? 'questionnaire-input-invalid' : ''"
                                >
                                <p v-if="$v.form.revenue.$dirty && !$v.form.revenue.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-profit">
                            <h3>Прибыль за последние 12 месяцев</h3>
                            <div class="questionnaire__loan-profit-content questionnaire__loan-content">
                                <input 
                                    placeholder="Прибыль" 
                                    class="questionnaire__input" 
                                    type="text"
                                    maxlength="8"
                                    v-model.trim="form.profit"
                                    @keypress="isNumber"
                                    :class="$v.form.profit.$error ? 'questionnaire-input-invalid' : ''"
                                >
                                <p v-if="$v.form.profit.$dirty && !$v.form.profit.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-credits">
                            <div class="questionnaire__loan-credits-title">
                                <h3>Есть ли у вас кредиты?</h3>
                                <div class="questionnaire__loan-credits-title-radios">
                                    <div class="questionnaire__loan-credits-title-item">
                                        <input 
                                            type="radio" 
                                            name="credit" 
                                            id="creditChoiceYes" 
                                            maxlength="8"
                                            :value="true" 
                                            v-model.trim="form.hasCredit"
                                            :class="$v.form.hasCredit.$error ? 'questionnaire-input-invalid' : ''"
                                        >
                                        <label for="creditChoiceYes">Да</label>
                                    </div>
                                    
                                    <div class="questionnaire__loan-credits-title-item">
                                        <input 
                                            type="radio" 
                                            name="credit" 
                                            id="creditChoiceNo" 
                                            :value="false" 
                                            v-model.trim="form.hasCredit"
                                        >
                                        <label for="creditChoiceNo">Нет</label>
                                    </div>
                                    <p style="margin-left: 20px;" v-if="$v.form.hasCredit.$dirty && !$v.form.hasCredit.required" class="questionnaire-invalid-feedback">Обязательно для выбора</p>
                                </div>
                            </div>
                            
                            <div class="questionnaire__loan-credits-content questionnaire__loan-content" >
                                <div style="display: flex;" class="">
                                    <div class="">
                                        <input 
                                        placeholder="Сумма" 
                                        class="questionnaire__input" 
                                        type="text"
                                        maxlength="8"
                                        v-model.trim="form.creditSum"
                                        @keypress="isNumber"
                                        :class="$v.form.creditSum.$error ? 'questionnaire-input-invalid' : ''"
                                        >
                                        <p v-if="$v.form.creditSum.$dirty && !$v.form.creditSum.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>                               
                                    </div>
                                    <div style="margin-left: 25px;" class="">
                                        <input 
                                        placeholder="Проценты" 
                                        class="questionnaire__input" 
                                        type="text"
                                        maxlength="3"
                                        v-model.trim="form.creditPercent"
                                        @keypress="isNumber"
                                        :class="$v.form.creditPercent.$error ? 'questionnaire-input-invalid' : ''"
                                        >
                                        <p v-if="$v.form.creditPercent.$dirty && !$v.form.creditPercent.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                                    </div>
                                </div>
                                <div style="display: flex;" class="">
                                    <div class="">
                                        <input 
                                        style="margin-top: 15px;"
                                        placeholder="Ежемесячные выплаты" 
                                        class="questionnaire__input" 
                                        type="text"
                                        maxlength="8"
                                        v-model.trim="form.creditMonthlyPayment"
                                        @keypress="isNumber"
                                        :class="$v.form.creditMonthlyPayment.$error ? 'questionnaire-input-invalid' : ''"
                                        >
                                        <p v-if="$v.form.creditMonthlyPayment.$dirty && !$v.form.creditMonthlyPayment.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                                    </div>
                                    <div style="margin-left: 25px;" class="">
                                        <input 
                                        style="margin-top: 15px;"
                                        placeholder="Срок погашения" 
                                        class="questionnaire__input questionnaire__input-date" 
                                        type="date"
                                        v-model.trim="form.creditMaturity"
                                        :class="$v.form.creditMaturity.$error ? 'questionnaire-input-invalid' : ''"
                                        >
                                        <p v-if="$v.form.creditMaturity.$dirty && !$v.form.creditMaturity.required" class="invalid-feedback questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-price">
                            <h3>Необходимая сумма</h3>
                            <div class="questionnaire__loan-price-content questionnaire__loan-content">
                                <input 
                                    placeholder="Сумма" 
                                    class="questionnaire__input" 
                                    
                                    maxlength="8"
                                    v-model.trim="form.neededSum"
                                    @keypress="isNumber"
                                    :class="$v.form.neededSum.$error ? 'questionnaire-input-invalid' : ''"
                                >
                                <p v-if="$v.form.neededSum.$dirty && !$v.form.neededSum.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-term">
                            <div class="questionnaire-select-div">
                                <h3>Срок займа</h3>
                                <select v-model="form.isWeek" name="" id="">
                                    <option :value="true">Неделя</option>
                                    <option :value="false">Месяц</option>
                                </select>
                            </div>
                            <input 
                                style="margin-left: 0; margin-top: 10px;" 
                                class="questionnaire__input" 
                                v-model="form.amount" 
                                type="text"
                                @keypress="isNumber"
                                :class="$v.form.amount.$error ? 'questionnaire-input-invalid' : ''"
                                maxlength="10"
                                placeholder="Срок займа">
                                <p style="color: #ff0000" v-if="$v.form.amount.$dirty && !$v.form.amount.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                            <div class="questionnaire__loan-term-content questionnaire__loan-content">
                                <div class="questionnaire__loan-term-content-item">
                                    <p>Готовы ли предоставить доступ к кредитной истории учредителя?</p>
                                    <input type="radio" name="accessFounderHistory" id="accessFounderHistory1" v-model="form.accessFounderHistory" :value="true">
                                    <label for="accessFounderHistory1" name="accessFounderHistory1">Да</label>
                                    <input type="radio" name="accessFounderHistory" id="accessFounderHistory2" v-model="form.accessFounderHistory" :value="false">
                                    <label for="accessFounderHistory2" name="accessFounderHistory2">Нет</label>
                                </div>
                                <p style="color: #ff0000" v-if="$v.form.accessFounderHistory.$dirty && !$v.form.accessFounderHistory.required" class="questionnaire-invalid-feedback">Обязательно для выбора</p>
                                <div class="questionnaire__loan-term-content-item">
                                    <p>Готовы ли предоставить доступ к кредитной истории компании?</p>
                                    <input type="radio" name="accessCompanyHistory" id="accessCompanyHistory1" v-model="form.accessCompanyHistory" :value="true">
                                    <label for="accessCompanyHistory1">Да</label>
                                    <input type="radio" name="accessCompanyHistory" id="accessCompanyHistory2" v-model="form.accessCompanyHistory" :value="false">
                                    <label for="accessCompanyHistory2">Нет</label>
                                </div>
                                <p style="color: #ff0000" v-if="$v.form.accessCompanyHistory.$dirty && !$v.form.accessCompanyHistory.required" class="questionnaire-invalid-feedback">Обязательно для выбора</p>
                                <button class="button questionnaire__btn" type="submit">Далее</button>
                                
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="questionnaire-nav" ><!-- v-on="handleScroll" -->
                <nav>
                    <ul class="questionnaire-nav__menu">
                        
                        <li>
                            <a style="color: #0345FF;" class="questionnaire-nav__menu-link">1</a>
                        </li>
                        <li>
                            <a  class="questionnaire-nav__menu-link">2</a>
                        </li>
        
                    </ul>
                </nav>
            </div>    
        </div>
    </div>    
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
import {mapActions, mapGetters} from 'vuex'

export default {
    data: () => ({
        modal: true,
        country: '',
        cities: '',
        form: {
            organizationName: '',
            legalFormOrganization: '',
            BIN: '',
            directorName: '',
            UIN: '',
            phoneNumber: '',
            email: '',
            businessDescription: '',
            countryID: '',
            cityID: '',
            productName: '',
            productPrice: '',
            revenue: '',
            profit: '',
            hasCredit: '',
            
            creditSum: '',
            creditPercent: '',
            creditMaturity: '',
            creditMonthlyPayment: '',
            
            isWeek: true,
            amount: '',
            neededSum: '',
            accessFounderHistory: '',
            accessCompanyHistory: '',
        },
        phoneNumberMask: {
            mask: '+{7}(000)000-00-00',
            lazy: true
        },
        credit: {
            showBlock: false,
            picked: ''
        }
    }),
    validations: {
        form: {
            organizationName: {required},
            legalFormOrganization: {required},
            BIN: {required, minLength: minLength(12)},
            directorName: {required},
            UIN: {required, minLength: minLength(12)},
            phoneNumber: {required, minLength: minLength(12)},
            email: {required, email},
            productName: {required},
            productPrice: {required},
            countryID: {required},
            cityID: {required},
            revenue: {required},
            profit: {required},
            
            creditSum: {required},
            creditPercent: {required},
            creditMonthlyPayment: {required},
            creditMaturity: {required},
            amount: {required},
            neededSum: {required},
            hasCredit: {required},
            accessFounderHistory: {required},
            accessCompanyHistory: {required}
        }
    },
    methods: {
        ...mapActions([
            'GET_COUNTRIES_FROM_API',
            'GET_PRODUCTCATEGORIES_FROM_API',
            'GET_QUESTIONNAIREFORMSTATE_TO_VUEX'
        ]),
        /*submitHandler(){
            this.$v.form.$touch()
            let formData = new FormData();
            formData.append('file', this.scoring.IDCard);
            const headers = { 'Content-Type': 'multipart/form-data' };
            if(!this.$v.form.$error){
                axios.post(
                    'http://localhost:8000/api/v1/borrower/create/',
                    {
                        form: this.form,
                        scoring: {
                            IDCard: formData
                        },
                    })
                .then(function(){
                    console.log('SUCCESS!!');})
                .catch(function(){
                    console.log('FAILURE!!');})
                
            }
        },*/
        submitHandler(value){
            this.$v.form.$touch()
            
            if(!this.$v.$invalid){
                //this.GET_QUESTIONNAIREFORMSTATE_TO_VUEX(value)
                localStorage.setItem('questionnaire', JSON.stringify(value))
                console.log(localStorage.getItem('questionnaire'))
                this.$router.push('/scoring')
            }
        },
        hideModal(){
            this.modal = false
        },
        uploadFile() {
            this.scoring.IDCard = this.$refs.IDCard.files[0];
            this.scoring.registrationCertificate = this.$refs.registrationCertificate.files[0]
        },
        formValidation(){
            return this.$v.form.$touch()
        },
        onAccept(e){
            const maskRef = e.detail
            this.form.phone = maskRef.value
        },
        onComplete(e){
            const maskRef = e.detail
            this.form.userPhone = maskRef.unmaskedValue
        },
        isNumber (e) {
        const regex = /[0-9]/
        if (!regex.test(e.key)) {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            }
        },
        isLetter (e) {
        const regex = /^([а-яё\s]+|[a-z\s]+)$/iu
        if (!regex.test(e.key)) {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            }
        }
    },
    computed: {
        ...mapGetters([
            'COUNTRIES',
            'PRODUCTCATEGORIES',
            'QUESTIONNAIREFORMSTATE'
        ]),
        formValid(){
            return this.$v.$invalid
        }
    },
    mounted() {
        this.GET_COUNTRIES_FROM_API(),
        this.GET_PRODUCTCATEGORIES_FROM_API()
    },
    directives: {
      imask: IMaskDirective
    },
    watch: {
        picked(){
            this.credit.showBlock = (this.credit.picked == 'creditChoiceYes')
        },
        'form.countryID': function(){
            this.cities = this.COUNTRIES.filter(item => {
                return item.id == this.form.countryID;
            })[0].cities;
        }
    },
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
    .questionnaire {
        margin: 20px 0 0 0;
        display: flex;
		&__questions {
		}

		&__title {
		}

		&__questions-form {
            display: flex;
            flex-direction: column;
		}

		&__questions-input {
            margin: 20px 0 0 0;
            height: 51px;
            width: 407px;
		}

		&__input {
            padding: 16px 20px;
		}

		&__loan {
            margin: 22px 0 0 50px;
            select{
                margin: 0 0 0 15px;
                &:first-child{
                    margin: 0;
                }
            }
            input{
                margin: 0 0 0 15px;
                &:first-child{
                    margin: 0;
                }
            }
		}

        &__loan-item{
            margin: 20px 0 0 0;
        }

        &__loan-content{
            margin: 15px 0 0 0;
        }

        &__loan-product-service{
            input, select{
                width: 335px;
            }
            
            select{
                margin: 0 0 0 15px;
            }
        }

        &__loan-revenue{
            input{
                width: 222px;
            }

            select{
                width: 448px;
            }
        }
        &__loan-profit{
            input{
                width: 685px;
            }
        }
        &__loan-credits{
            select{
                &:first-child{
                    width: 504px;
                    margin: 0;
                }
                width: 432px;
                margin: 15px 0 0 0;
            }
            input{
                &:last-child{
                    width: 238px;
                }
                width: 166px;
            }
            &-title{
                display: flex;
                align-items: center;
                &-item{
                    display: flex;
                    align-items: center;
                    margin: 0 0 0 25px;
                }
                &-radios{
                    display: flex;
                    align-items: center;
                    margin: 0 0 0 5px;
                    label{
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 24px;
                        color: #333333;
                        margin: 0 0 0 10px;
                    }
                    input{
                        width: 20px;
                        height: 20px;
                        border-radius: 5px;
                    }
                }
            }
        }
        &__loan-price{
            input{
                width: 685px;
            }
        }
        &__loan-term{
            p{
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #333333;
            }
        }
        &__loan-term-content-item{
            margin: 20px 0 0 0;
            display: flex;
            align-items: center;
            label{
                margin: 0 0 0 10px;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                text-align: right;
                color: #333333;
            }
            input{
                width: 20px;
                height: 20px;
            }
        }
        &__loan-term-range{
            width: 200px;
        }
}

.scoring {
        margin: 30px 0 0 0;
		&__inner {
            
		}

		&__content {
            margin: 25px 0 0 0;
            text-align: center;
            display: flex;
		}

        &__item-wrapper{
            margin: 25px 0 0 0;
        }

		&__item {
            width: 335px;
            height: 360px;
            padding: 30px;
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
            border-radius: 10px;
            margin: 0 0 0 30px;
            &:first-child{
                margin: 0;
            }
		}

		&__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
		}

		&__subtitle {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            margin: 5px 0 0 0;
		}

		&__document {
            margin: 17px 0 0 0;
            
		}
}


.questionnaire-textarea{
    height: 120px;
}

.questionnaire-input-invalid{
   border: 1px solid #ff0000;
}

.questionnaire-invalid-feedback{
    color: #ff0000;
    margin: 4px 0 0 0;
}
.esf__button{
    display: inline-block;
    padding: 17px 25px;
    cursor: pointer;
    margin: 20px 0 0 0;
}

.esf__text{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin: 35px 0 0 0;
}

.esf__examination{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0 0 0;
}

.esf__examination-text{
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
}

.esf__examination-button{
    padding: 17px 20px;
}

.scoring__expectation{
    margin: 70px 0 0 0;
}

.scoring__expectation-title{
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}

.scoring__expectation-text{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: rgba(51, 51, 51, 0.6);
}

.questionnaire__btn{
    padding: 17px 20px;
    float: right;
    margin: 10px 0 30px 0;
}

.questionnaire-select-div{
    display: flex;
    select{
        border-radius: 0;
        background: inherit;
    }
}

.questionnaire-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
		&__menu {
            position: fixed;
            right: 55px;
            top: 40%;
		}

        li{
            margin: 25px 0 0 0;
        }

		&__menu-link {
            font-weight: 600;
            font-size: 30px;
            line-height: 36px;
            &:hover{
                color: #0345FF;
                //font-size: 36px;
                transition: 1s;
            }
		}
}

.questionnaire__input-date{
    margin: 0;
}
.scoring__modal{
    position: fixed;
    z-index: 10;
    top: 20%;
    left: 29%;
    width: 900px;
    height: 600px;
    background: #fff;
    box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 4px solid #0345FF;
    font-size: 17px;
    text-align: center;
    overflow: auto;
    ul{
        text-align: start;
        margin-top: 20px;
        li{
            margin-top: 5px;
        }
    }
    p{
        margin-top: 20px;
    }
    scrollbar-color: #0345FF #fff ; /* «цвет ползунка» «цвет полосы скроллбара» */
    scrollbar-width: thin;
    span{
        font-weight: 600;
    }
}
.modal__button{
    display: inline-block;
    width: 225px;
    height: 60px;
    cursor: pointer;
    margin: 0 auto;
    padding: 16px;
    text-align: center;
    margin-top: 20px;
}


//Input range

</style>
