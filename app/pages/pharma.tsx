"use client"

import { useState } from "react"
import { Search, X, Plus, Minus, Filter } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Badge } from "@/app/components/ui/badge"

interface Medicine {
  id: number
  name: string
  price: number
  stock: number
  category: string
}

const initialMedicines: Medicine[] = [
  { id: 1, name: "Paracetamol 500mg", price: 20, stock: 45, category: "Headache / Fever" },
  { id: 2, name: "Amoxicillin 250mg", price: 85, stock: 12, category: "Bacterial Infection" },
  { id: 3, name: "Ibuprofen 400mg", price: 35, stock: 0, category: "Pain Relief" },
  { id: 4, name: "Cetirizine 10mg", price: 15, stock: 67, category: "Allergy" },
  { id: 5, name: "Omeprazole 20mg", price: 45, stock: 8, category: "Acidity / Gastric" },
  { id: 6, name: "Metformin 500mg", price: 25, stock: 34, category: "Diabetes" },
  { id: 7, name: "Aspirin 75mg", price: 12, stock: 89, category: "Cardiovascular / Blood Thinner" },
  { id: 8, name: "Loratadine 10mg", price: 28, stock: 23, category: "Allergy" },
]

export default function PharmacistDashboard() {
  const [medicines, setMedicines] = useState<Medicine[]>(initialMedicines)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const updateStock = (id: number, change: number) => {
    setMedicines((prev) =>
      prev.map((med) => (med.id === id ? { ...med, stock: Math.max(0, med.stock + change) } : med)),
    )
  }

  const getStockStatus = (stock: number) => {
    if (stock === 0) return "out-of-stock"
    if (stock <= 10) return "low-stock"
    return "in-stock"
  }

  const getStockBadgeVariant = (status: string) => {
    switch (status) {
      case "out-of-stock":
        return "destructive"
      case "low-stock":
        return "secondary"
      default:
        return "default"
    }
  }

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch =
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterStatus === "all" ||
      (filterStatus === "low-stock" && medicine.stock <= 10 && medicine.stock > 0) ||
      (filterStatus === "out-of-stock" && medicine.stock === 0) ||
      (filterStatus === "in-stock" && medicine.stock > 10)

    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen bg-background p-6 mt-50">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Pharmacist Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage your medicine inventory efficiently</p>
          </div>
        </div>

        {/* Search Bar */}
        <Card className="flex justify-center h-12 bg-gray-50">
          <CardContent className="p-4 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search medicines by name or category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  pl-10 pr-10 h-9 w-full
                  bg-gray-50              
                  border-none
                  rounded-md
                  focus:outline-none   
                  focus:ring-0
                "
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Filter and Results */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by stock status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Show All</SelectItem>
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="low-stock">Low Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {filteredMedicines.length} of {medicines.length} medicines
          </p>
        </div>

        {/* Medicine Inventory Table */}
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle>Medicine Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto ">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">S. No.</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Medicine Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Price (₹)</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Stock Quantity</th>

                    {/* ✅ Center this */}
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Status</th>

                    <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredMedicines.map((medicine, index) => {
                    const stockStatus = getStockStatus(medicine.stock)
                    return (
                      <tr
                        key={medicine.id}
                        className={`border-b border-border hover:bg-muted/50 transition-colors ${stockStatus === "out-of-stock"
                          ? "bg-destructive/5"
                          : stockStatus === "low-stock"
                            ? "bg-orange-50"
                            : ""
                          }`}
                      >
                        <td className="py-3 px-4 text-foreground">{index + 1}</td>
                        <td className="py-3 px-4 font-medium text-foreground">{medicine.name}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{medicine.category}</td>
                        <td className="py-3 px-4 text-foreground font-medium">₹{medicine.price}</td>
                        <td className="py-3 px-4 ">
                          <span
                            className={`font-semibold ${stockStatus === "out-of-stock"
                              ? "text-destructive"
                              : stockStatus === "low-stock"
                                ? "text-orange-600"
                                : "text-foreground"
                              }`}
                          >
                            {medicine.stock}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center align-middle">
                          <Badge
                            className="mx-auto"
                            variant={getStockBadgeVariant(stockStatus)}
                          >
                            {stockStatus === "out-of-stock"
                              ? "Out of Stock"
                              : stockStatus === "low-stock"
                                ? "Low Stock"
                                : "In Stock"}
                          </Badge>
                        </td>

                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStock(medicine.id, -1)}
                              disabled={medicine.stock === 0}
                              className="w-8 h-8 p-0 rounded-full"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStock(medicine.id, 1)}
                              className="w-8 h-8 p-0 rounded-full"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {filteredMedicines.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No medicines found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
