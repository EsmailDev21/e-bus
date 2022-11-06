import { Prisma } from "@prisma/client"


export class CreateStationDto {
    label:string
    location:Prisma.LocationCreateInput
}
