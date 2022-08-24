import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

function calculateAge(birthday: Date) { 
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs);
  return ageDate.getUTCFullYear() - 1970;
}

function validateAgeRestriction(group: AbstractControl): { [s:string]: boolean } {
  let birthdate = new Date(group.get('birthDate')?.value);
  let age = calculateAge(birthdate);
  console.log(age);
  if (age < 18) {
    return {ageRestrictionError:true}
  }
  return {};
}

function validateBillingAddress(group: AbstractControl): { [s:string]: boolean } {
  let weight = group.get('weight')?.value
  console.log(weight)
  if(weight > 200 && group.get('billingAddress')?.value.length === 0) {
    return {billingAddressError: true} 
  } else {
    return {}
  }
    
  
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  myForm: FormGroup;

  sizes: Array<any> = [
    {name: "S", value: "s", description: [10, 20]},
    {name: "M", value: "m", description: [50, 100]},
    {name: "L", value: "l", description: [500,800]},
    {name: "XL", value: "xl", description: [2000]},
  ]

  weights: number[];

  selectedSizes: string[];
  selectedSizesArray: Array<any>;
  isHeavyPackage: boolean;
  selectedWeight?: string;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      birthDate: [''],
      billingAddress: [''],
      terms: ['', Validators.requiredTrue],
      weight: ['']
    },{ validators: [validateAgeRestriction, validateBillingAddress]})
    this.selectedSizes = []
    this.selectedSizesArray = [];
    this.isHeavyPackage = false;
    this.weights = [10, 20, 50, 100, 500, 800, 2000]
  }

  ngOnInit(): void {
  }


  get name() : FormControl {
    return this.myForm.get('name') as FormControl
  }
  get address() : FormControl {
    return this.myForm.get('address') as FormControl
  }
  get billingAddress() : FormControl {
    return this.myForm.get('billingAddress') as FormControl
  }
  get birthDate() : FormControl {
    return this.myForm.get('birthDate') as FormControl
  }

  

  onCheckboxChange(event: any) :void{
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    } else {
      const index = this.selectedSizes.findIndex(selectedSize => selectedSize === event.target.value)
      this.selectedSizes.splice(index, 1)
    }
    this.getSizes()
    this.getWeights(this.selectedSizesArray)
  }

  getSizes() : void{
    this.selectedSizesArray = this.sizes.filter(size => {
      return this.selectedSizes.find(selectedSize => selectedSize === size.value)
    })
  }

  getWeights(sizes: any[]) :void{
    let selectedWeights: number[] = [];
    sizes.forEach(size => {
      console.log(size.description)
      for(let i = 0; i < size.description.length; i++){
        selectedWeights.push(size.description[i])
      }
    });
    this.weights = selectedWeights
  }

  onSubmit() :void{
    console.log(this.myForm.value);
    console.log(this.selectedSizes)
    console.log(this.selectedWeight)
  }

  setWeight(event: any) :void {
    this.selectedWeight = event.target.value
    if(Number(this.selectedWeight) > 200){
      this.isHeavyPackage = true;
    } else {
      this.isHeavyPackage = false;
    }
  }



}
