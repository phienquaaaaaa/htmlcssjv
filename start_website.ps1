# Start ShopEasy Website
Write-Host "Starting ShopEasy website..." -ForegroundColor Green

# Change to the website directory
Set-Location "c:\Users\MSI TRUE GAMING\Desktop\website stuff"

# Start the Python HTTP server in the background
$serverJob = Start-Job -ScriptBlock {
    Set-Location "c:\Users\MSI TRUE GAMING\Desktop\website stuff"
    python -m http.server 8080
}

# Wait a moment for the server to start
Start-Sleep -Seconds 2

# Open the website in the default browser
Start-Process "http://localhost:8080"

Write-Host "Website is now running at http://localhost:8080" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow

# Keep the script running to maintain the background job
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    # Clean up when the script is stopped
    Stop-Job $serverJob
    Remove-Job $serverJob
    Write-Host "Server stopped." -ForegroundColor Red
}