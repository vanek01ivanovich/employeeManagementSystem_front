export class CreateEmployeeRequestDto {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  departmentName: string;
  roleName: string;

  constructor(username: string, firstName: string, lastName: string, password: string, email: string, departmentName: string, roleName: string) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.departmentName = departmentName;
    this.roleName = roleName;
  }



}
