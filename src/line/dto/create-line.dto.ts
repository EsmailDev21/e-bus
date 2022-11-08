import {Prisma, Station} from '@prisma/client'

export class CreateLineDto {
    label:string
    departureStationId:string
    arriveStationId:string
}
