import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterService } from '../register.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-otp-modal',
  templateUrl: './otp-modal.component.html',
  styleUrls: ['./otp-modal.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class OtpModalComponent implements OnInit {
  otpForm: FormGroup;
  validOTP = true;

  constructor(
    public dialogRef: MatDialogRef<OtpModalComponent>,
    public formBuilder: FormBuilder,
    private registerService: RegisterService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
    const phoneNumber = this.data;
    if (!phoneNumber) {
      this.dialogRef.close({ verified: false });
    }
    this.otpForm = this.formBuilder.group({
      otp: new FormControl(Validators.required),
    })
  }

  submit() {
    const valid = this.otpForm.valid;
    if (valid) {
      const phoneNo = this.data;
      const otp = this.otpForm.value['otp'];
      const otpData = {
        phoneNo,
        otp: parseInt(otp)
      }
      this.registerService.validateOTP({otpData}).subscribe((res) => {
        this.dialogRef.close({ verified: true, otp });
      }, (error) => {
        this.validOTP = false;
      })
    }
  }
}
