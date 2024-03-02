import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from '../form-builder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preview-answer',
  templateUrl: './preview-answer.component.html',
  styleUrls: ['./preview-answer.component.scss']
})
export class PreviewAnswerComponent implements OnInit {

  form: FormData | undefined; // Use the defined interface for form data

  constructor(private formBuilderService: FormBuilderService) { }

  ngOnInit() {
    this.formBuilderService.formBuilder.subscribe((formData: FormData) => {
      this.form = formData;
    });
  }

}
interface FormData {
  selfAnswers: string;
  form: any; // Adjust the type according to the structure of your form data
}