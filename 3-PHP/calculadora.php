<?php

class Calculadora {
    private $historial = [];

    public function sumar($a, $b) {
        $resultado = $a + $b;
        $this->historial[] = "Suma: $a + $b = $resultado";
        return $resultado;
    }

   
    public function restar($a, $b) {
        $resultado = $a - $b;
        $this->historial[] = "Resta: $a - $b = $resultado";
        return $resultado;
    }

    
    public function multiplicar($a, $b) {
        $resultado = $a * $b;
        $this->historial[] = "Multiplicación: $a * $b = $resultado";
        return $resultado;
    }

    public function dividir($a, $b) {
        if ($b == 0) {
            throw new Exception("División por cero no permitida");
        }
        $resultado = $a / $b;
        $this->historial[] = "División: $a / $b = $resultado";
        return $resultado;
    }

    
    public function getHistorial() {
        return $this->historial;
    }
}

// Prueba de la clase Calculadora
try {
    $calc = new Calculadora();
    echo "Suma: " . $calc->sumar(10, 5) . "\n";
    echo "Resta: " . $calc->restar(10, 5) . "\n";
    echo "Multiplicación: " . $calc->multiplicar(10, 5) . "\n";
    echo "División: " . $calc->dividir(10, 5) . "\n";
    // echo $calc->dividir(10, 0); // Descomentar para probar error
    echo "Historial de operaciones:\n";
    print_r($calc->getHistorial());
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>