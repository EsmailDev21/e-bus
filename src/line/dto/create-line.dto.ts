import {Prisma, Station} from '@prisma/client'

export class CreateLineDto {
    departureStationId:string
    arriveStationId:string
}
