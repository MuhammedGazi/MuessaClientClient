import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Assuming InvitationCardDto and InvitationTypeService are defined elsewhere
// For now, we'll define placeholder types and a mock service

interface InvitationCardDto {
  id?: string;
  title: string;
  invitationType: string;
  date: Date;
  location: string;
  description: string;
}

// Mock service to get invitation types
class InvitationTypeService {
  getInvitationTypes() {
    return ['Birthday', 'Wedding', 'Conference', 'Party', 'Other'];
  }
}

@Component({
  selector: 'app-create-invitation-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-invitation-card.component.html',
  styleUrls: ['./create-invitation-card.component.css'] // Assuming a CSS file will be created
})
export class CreateInvitationCardComponent implements OnInit {
  @Output() cardCreated = new EventEmitter<InvitationCardDto>();

  newCard: InvitationCardDto = {
    title: '',
    invitationType: '',
    date: new Date(),
    location: '',
    description: ''
  };

  invitationTypes: string[] = [];
  private invitationTypeService = new InvitationTypeService(); // Use mock service

  ngOnInit(): void {
    this.invitationTypes = this.invitationTypeService.getInvitationTypes();
    // Set default invitation type if available, otherwise the first one
    if (this.invitationTypes.length > 0) {
      this.newCard.invitationType = this.invitationTypes[0];
    }
  }

  onSubmit(): void {
    // Basic validation example - more robust validation might be needed
    if (!this.newCard.title || !this.newCard.invitationType || !this.newCard.date || !this.newCard.location || !this.newCard.description) {
      alert('Please fill in all fields.');
      return;
    }
    this.cardCreated.emit(this.newCard);
  }
}
