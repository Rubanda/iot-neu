export interface Appointment {
    id: number;
    name: string;
    type: string;
    startDate: string; // Date in ISO format (e.g., '2024-05-01')
    from: string; // Time in 'HH:mm' format (e.g., '11:00')
    to: string; // Time in 'HH:mm' format (e.g., '12:00')
    description: string | null;
    isRecurring: boolean;
    isAllDay: boolean;
    isCompleted: boolean;
    isCancelled: boolean;
    appointmentRoleId: number;
    branchId: number;
    createdAt: string; // Date-time in ISO format (e.g., '2024-04-29T09:07:09.217Z')
    updatedAt: string; // Date-time in ISO format (e.g., '2024-04-29T09:07:09.217Z')
    deletedAt: string | null; // Date-time in ISO format or null (e.g., 'null' if not deleted)
    AppointmentRole: AppointmentRole;
    memberAppointment: MemberAppointment;
    user: number[];
    externalUserAppointment: any; // You may want to define a type if the structure is known
}

interface AppointmentRole {
    id: number;
    name: string;
    description: string;
}

interface MemberAppointment {
    id: number;
    memberId: number;
    name: string;
    surname: string;
    avatarLink: string;
    gender: 'Male' | 'Female' | 'Other';
}