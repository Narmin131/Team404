// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdən sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// Alert, prompt


// Variables - Deyisken

// var  -- global variable

var a = 5;
console.log(a);


// let -- local variable

let b = 'Anar'
console.log(b);


// const  -- local variable

const c = true;
console.log(c);

// Operatorlar 

// Sert operatoru - Conditional Operator 

// if  --- əgər
// else if  --- deyilsə 
// else  -- deyil


// Birinci numune
var cash = 20;

if (cash > 80) {
    console.log('Tendir ve zavod coreyi ala bilersen');
}
else if (cash == 70) {
    console.log('Yalniz zavod coreyi ala bilersen');
}
else {
    console.log('Eve get');
}

// Ikinci numune 

let user = 'Ilkin'

if (user === 'Ilkin'){
    console.log('Daxil ola bilersen');
}
else{
    console.log('Daxil ola bilmezsen');
}


var btnText = document.querySelector('button').innerHTML
console.log(btnText);


