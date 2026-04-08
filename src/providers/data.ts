import { DataProvider } from "@refinedev/core";
import { GetListParams} from "@refinedev/core";
import { GetListResponse } from "@refinedev/core";
import { BaseRecord } from "@refinedev/core";
import { Subject } from "@/types";

const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "LeCode",
    department: "Computer Science",
    description: "Foundational course covering algorithms, data structures, and computational thinking.",
    createdAt: "2025-09-01",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Gap Filler",
    department: "Mathematics",
    description: "Study of vectors, matrices, linear transformations, and eigenvalues.",
    createdAt: "2025-09-01",
  },
  {
    id: 3,
    code: "PHYS150",
    name: "GapSpreader",
    department: "Physics",
    description: "Introduction to Newtonian mechanics, kinematics, and dynamics of particles and rigid bodies.",
    createdAt: "2025-09-01",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({resource}:
    GetListParams) => {
      if(resource !== 'subjects') return {data: [] as TData[], total: 0};

      return{
        data: mockSubjects as unknown as TData[],
        total: mockSubjects.length,
      }
  },

  getOne: async()=> {throw new Error('This function is not present in mock')},
  create: async()=> {throw new Error('This function is not present in mock')},
  update: async()=> {throw new Error('This function is not present in mock')},
  deleteOne: async()=> {throw new Error('This function is not present in mock')},
  getApiUrl: () => "",
}
