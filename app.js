


    //Price Calculation

   
    function Price (product,IsIncrease){
        const input = document.getElementById(product+'Input').value;
        const parseInput = parseInt(input);
        let Quantity = parseInput;

        if(IsIncrease == true){
            Quantity = parseInput +1;
        } if(IsIncrease == false && parseInput>0){
            Quantity = parseInput -1 ;
        }
        document.getElementById(product+'Input').value=Quantity;
        let price;
        if(product == "phone"){
            price = Quantity * 1219;
        }else if(product== 'case'){
            price = Quantity *59;
        }
        document.getElementById(product+'Price').innerText= price;
        total('phone','case');
    }

    //Phone Price
    document.getElementById('decreasePhone').addEventListener('click',function(){
        Price('phone',false);
        });
    document.getElementById('increasePhone').addEventListener('click',function(){
        Price('phone',true);
        });
    
        //Case Price
    document.getElementById('increaseCase').addEventListener('click',function(){
        Price('case',true);
    });
    
    document.getElementById('decreaseCase').addEventListener('click',function(){
        Price('case',false);
    });

    //Grand total

    function total(phone,case){
        const phoneInput  = document.getElementById(phone+'Input');
        const phoneValue = phoneInput.value;
        const phoneParseValue = parseInt(phoneValue);
        
    

        let total = phoneParseValue *1219 + caseParseValue *59;
        document.getElementById('subTotal').innerText="$"+total;
       
    }

    fu