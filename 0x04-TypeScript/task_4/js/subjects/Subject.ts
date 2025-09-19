["setTeacher(teacher:Teacher)"]

namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
setTeacher(teacher: Teacher) {
  this.teacher = teacher;
}
// task_4/js/subjects/Subject.ts
namespace Subjects {
  export interface Subject {
  }
}


