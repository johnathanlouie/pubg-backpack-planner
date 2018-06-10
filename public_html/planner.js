/*
 * Copyright (C) 2018 Johnathan Louie
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var app = angular.module("planner", []);
app.controller("plannerController", function ($scope) {
    $scope.capacity = 0;
    $scope.weight = 0;
    $scope.space = 0;
    $scope.belt = true;
    $scope.vest = true;
    $scope.backpack = "backpack2";
    $scope.ammo9 = 0;
    $scope.ammo45 = 0;
    $scope.ammo12 = 0;
    $scope.ammo556 = 0;
    $scope.ammo762 = 0;
    $scope.ammoMag = 0;
    $scope.medkit = 0;
    $scope.firstaid = 0;
    $scope.bandage = 0;
    $scope.energy = 0;
    $scope.painkiller = 0;
    $scope.adrenaline = 0;
    $scope.frag = 0;
    $scope.molotov = 0;
    $scope.smoke = 0;
    $scope.stun = 0;
    $scope.gascan = 0;
    $scope.totalCapacity = function () {
        $scope.capacity = 20;
        if ($scope.belt) {
            $scope.capacity += 50;
        }
        if ($scope.vest) {
            $scope.capacity += 70;
        }
        switch ($scope.backpack) {
            case "backpack1":
                $scope.capacity += 170;
                break;
            case "backpack2":
                $scope.capacity += 220;
                break;
            case "backpack3":
                $scope.capacity += 270;
                break;
            default:
                $scope.capacity += 0;
        }
        return $scope.capacity;
    };
    $scope.totalWeight = function () {
        $scope.weight = $scope.ammo9 * 0.375;
        $scope.weight += $scope.ammo45 * 0.4;
        $scope.weight += $scope.ammo12 * 1.25;
        $scope.weight += $scope.ammo556 * 0.5;
        $scope.weight += $scope.ammo762 * 0.7;
        $scope.weight += $scope.ammoMag * 1;
        $scope.weight += $scope.medkit * 20;
        $scope.weight += $scope.firstaid * 10;
        $scope.weight += $scope.bandage * 2;
        $scope.weight += $scope.energy * 4;
        $scope.weight += $scope.painkiller * 10;
        $scope.weight += $scope.adrenaline * 20;
        $scope.weight += $scope.frag * 12;
        $scope.weight += $scope.molotov * 18;
        $scope.weight += $scope.smoke * 16;
        $scope.weight += $scope.stun * 14;
        $scope.weight += $scope.gascan * 20;
        return $scope.weight;
    };
    $scope.totalSpace = function () {
        $scope.space = $scope.totalCapacity() - $scope.totalWeight();
        return $scope.space;
    };
});