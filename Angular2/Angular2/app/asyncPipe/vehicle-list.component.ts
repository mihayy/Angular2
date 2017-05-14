import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle, VehicleService } from './vehicle.service';

@Component({
    selector: "my-vehicle-list-async",
    templateUrl: "./app/asyncPipe/vehicle-list.component.html",
    providers: [VehicleService]
})
export class AsyncVehicleListComponent implements OnInit {
    errorMessage: string;
    selectedVehicle: Vehicle;
    vehicles: Observable<Vehicle[]>;
    
    constructor(private vehicleService: VehicleService) { }

    getVehicles(value?: string) {
        this.vehicles = this.vehicleService.getVehicles(value);
    }

    ngOnInit() { this.getVehicles(); }

    select(vehicle: Vehicle) {
        this.selectedVehicle = vehicle;
    }
}