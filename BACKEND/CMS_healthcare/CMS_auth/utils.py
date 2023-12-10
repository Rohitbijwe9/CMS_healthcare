def detectUser(user):
    if user.user_type == 'Admin':
        redirectURL = '/adminDashboard/'
        return redirectURL
    elif user.user_type == 'Doctor':
        redirectURL = '/doctorDashboard/'
        return redirectURL
    elif user.user_type == 'Receptionist':
        redirectURL = '/receptionistDashboard/'
        return redirectURL
    elif user.user_type == 'Wardboy':
        redirectURL = '/wardboyDashboard/'
        return redirectURL
    elif user.user_type == 'Nurse':
        redirectURL = '/nurseDashboard/'
        return redirectURL