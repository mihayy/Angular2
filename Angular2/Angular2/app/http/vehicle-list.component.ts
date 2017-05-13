import { Component, OnInit } from '@angular/core';
import { Vehicle, VehicleService } from './vehicle.service';

@Component({
    selector: "my-vehicle-list",
    templateUrl: "./app/http/vehicle-list.component.html",
    providers: [VehicleService]
})
export class VehicleListComponent implements OnInit {
    errorMessage: string;
    selectedVehicle: Vehicle;
    vehicles: Vehicle[];
    
    constructor(private vehicleService: VehicleService) { }

    getVehicles() {
        this.vehicleService.getVehicles()
            .subscribe(
            vehicles => this.vehicles = vehicles,
            error => this.errorMessage = <any>error
            );

        //trigger error
        this.vehicleService.getVehiclesError()
            .subscribe(
                vehicles => this.vehicles = vehicles,
                error => this.errorMessage = <any>error
                );
    }

    ngOnInit() { this.getVehicles(); }

    select(vehicle: Vehicle) {
        this.selectedVehicle = vehicle;
    }
}