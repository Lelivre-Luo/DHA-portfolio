---
title: "Covid Data Tracker"
title_en: "Covid Data Tracker"
title_zh: "新冠数据追踪器"
description: "API, OCR, and data extraction to track Covid cases in Montes Claros - Brazil."
description_en: "API, OCR, and data extraction to track Covid cases in Montes Claros - Brazil."
description_zh: "在巴西蒙特斯克拉罗斯市基于 API、OCR 与数据提取的 COVID-19 数据追踪系统。"
image: null
tags: ["Python", "Go", "Docker"]
tags_en: ["Python", "Go", "Docker"]
tags_zh: ["Python", "Go", "Docker"]
github: "https://github.com/mgiovani/mocorona"
demo: null
---

# Covid Data Tracker

A comprehensive data tracking system designed to monitor and analyze COVID-19 cases in Montes Claros, Brazil. This project combines web scraping, OCR (Optical Character Recognition), and data processing to provide real-time insights into the pandemic's impact on the local community.

## Features

### 📊 Real-time Data Collection
- **Automated Data Scraping**: Collects data from official government sources
- **OCR Processing**: Extracts data from images and PDFs using advanced OCR techniques
- **Data Validation**: Ensures data accuracy and consistency
- **Real-time Updates**: Provides up-to-date information on COVID-19 cases

### 🔍 Data Analysis
- **Trend Analysis**: Tracks case trends over time
- **Geographic Mapping**: Visualizes data by location within the city
- **Statistical Reports**: Generates comprehensive statistical reports
- **Predictive Modeling**: Uses machine learning for case prediction

### 🌐 API and Web Interface
- **RESTful API**: Provides programmatic access to data
- **Web Dashboard**: User-friendly interface for data visualization
- **Data Export**: Export data in various formats (CSV, JSON, Excel)
- **Real-time Notifications**: Alerts for significant changes in data

## Technical Implementation

### Core Technologies
- **Python 3.8+**: Primary backend language
- **Go**: High-performance data processing
- **Docker**: Containerization and deployment
- **PostgreSQL**: Data storage and management
- **Redis**: Caching and session management
- **Celery**: Asynchronous task processing

### Architecture
The system follows a microservices architecture:

```
src/
├── api/                 # REST API service
├── scraper/            # Data collection service
├── ocr/                # OCR processing service
├── analyzer/           # Data analysis service
├── web/                # Web dashboard
├── shared/             # Shared utilities
└── docker/             # Docker configurations
```

### Data Collection Pipeline
```python
# scraper/main.py
import asyncio
import aiohttp
from bs4 import BeautifulSoup
import pytesseract
from PIL import Image
import io

class CovidDataScraper:
    def __init__(self):
        self.session = None
        self.ocr_engine = pytesseract
    
    async def scrape_official_sources(self):
        """Scrape data from official government websites"""
        sources = [
            "https://www.montesclaros.mg.gov.br/covid19",
            "https://www.saude.mg.gov.br/coronavirus",
            "https://covid.saude.gov.br"
        ]
        
        for source in sources:
            try:
                data = await self._scrape_source(source)
                await self._process_data(data)
            except Exception as e:
                print(f"Error scraping {source}: {e}")
    
    async def _scrape_source(self, url):
        """Scrape data from a specific source"""
        async with self.session.get(url) as response:
            content = await response.text()
            soup = BeautifulSoup(content, 'html.parser')
            
            # Extract relevant data
            cases_data = self._extract_cases_data(soup)
            return cases_data
    
    def _extract_cases_data(self, soup):
        """Extract COVID-19 cases data from HTML"""
        # Implementation for data extraction
        pass
```

### OCR Processing
```python
# ocr/processor.py
import pytesseract
from PIL import Image
import cv2
import numpy as np

class OCRProcessor:
    def __init__(self):
        self.tesseract_config = '--oem 3 --psm 6'
    
    def process_image(self, image_path):
        """Process image and extract text using OCR"""
        # Load and preprocess image
        image = cv2.imread(image_path)
        processed_image = self._preprocess_image(image)
        
        # Extract text using Tesseract
        text = pytesseract.image_to_string(
            processed_image, 
            config=self.tesseract_config
        )
        
        # Parse COVID-19 data from text
        covid_data = self._parse_covid_data(text)
        return covid_data
    
    def _preprocess_image(self, image):
        """Preprocess image for better OCR results"""
        # Convert to grayscale
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        
        # Apply noise reduction
        denoised = cv2.medianBlur(gray, 3)
        
        # Apply thresholding
        _, thresh = cv2.threshold(denoised, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        
        return thresh
    
    def _parse_covid_data(self, text):
        """Parse COVID-19 data from OCR text"""
        # Implementation for data parsing
        pass
```

### Data Analysis
```python
# analyzer/trend_analyzer.py
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
import matplotlib.pyplot as plt

class TrendAnalyzer:
    def __init__(self, data_source):
        self.data_source = data_source
        self.df = None
    
    def load_data(self):
        """Load data from database"""
        # Implementation for data loading
        pass
    
    def analyze_trends(self):
        """Analyze COVID-19 case trends"""
        if self.df is None:
            self.load_data()
        
        # Calculate daily cases
        daily_cases = self.df.groupby('date')['cases'].sum()
        
        # Calculate moving averages
        daily_cases['7_day_avg'] = daily_cases.rolling(window=7).mean()
        daily_cases['14_day_avg'] = daily_cases.rolling(window=14).mean()
        
        # Calculate growth rate
        daily_cases['growth_rate'] = daily_cases['cases'].pct_change()
        
        return daily_cases
    
    def predict_future_cases(self, days_ahead=7):
        """Predict future cases using machine learning"""
        if self.df is None:
            self.load_data()
        
        # Prepare data for prediction
        X = np.arange(len(self.df)).reshape(-1, 1)
        y = self.df['cases'].values
        
        # Create polynomial features
        poly_features = PolynomialFeatures(degree=2)
        X_poly = poly_features.fit_transform(X)
        
        # Train model
        model = LinearRegression()
        model.fit(X_poly, y)
        
        # Make predictions
        future_X = np.arange(len(self.df), len(self.df) + days_ahead).reshape(-1, 1)
        future_X_poly = poly_features.transform(future_X)
        predictions = model.predict(future_X_poly)
        
        return predictions
```

### API Implementation
```python
# api/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(title="COVID Data Tracker API", version="1.0.0")

class CovidData(BaseModel):
    date: str
    cases: int
    deaths: int
    recovered: int
    active: int

class TrendData(BaseModel):
    date: str
    cases: int
    growth_rate: float
    moving_average: float

@app.get("/api/cases", response_model=List[CovidData])
async def get_cases(
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    limit: int = 100
):
    """Get COVID-19 cases data"""
    # Implementation for retrieving cases data
    pass

@app.get("/api/trends", response_model=List[TrendData])
async def get_trends(days: int = 30):
    """Get COVID-19 trend analysis"""
    # Implementation for trend analysis
    pass

@app.get("/api/predictions")
async def get_predictions(days_ahead: int = 7):
    """Get COVID-19 case predictions"""
    # Implementation for predictions
    pass

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## Installation and Setup

### Prerequisites
- Python 3.8+
- Go 1.16+
- Docker and Docker Compose
- PostgreSQL 12+
- Redis 6+

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/mgiovani/mocorona.git
cd mocorona
```

2. **Set up environment variables**
```bash
# Create .env file
DATABASE_URL=postgresql://user:password@localhost:5432/covid_tracker
REDIS_URL=redis://localhost:6379
OCR_API_KEY=your_ocr_api_key
SCRAPING_INTERVAL=3600  # 1 hour
```

3. **Build and run with Docker**
```bash
docker-compose up -d
```

4. **Run database migrations**
```bash
python manage.py migrate
```

5. **Start the services**
```bash
# Start data collection
python scraper/main.py

# Start API server
python api/main.py

# Start web dashboard
python web/main.py
```

## Usage

### API Endpoints

#### Get Cases Data
```bash
GET /api/cases?start_date=2023-01-01&end_date=2023-12-31
```

#### Get Trend Analysis
```bash
GET /api/trends?days=30
```

#### Get Predictions
```bash
GET /api/predictions?days_ahead=7
```

### Web Dashboard
Access the web dashboard at `http://localhost:3000` to:
- View real-time COVID-19 data
- Analyze trends and patterns
- Export data in various formats
- Set up alerts and notifications

## Data Sources

### Official Sources
- **Ministério da Saúde**: Brazilian Ministry of Health
- **Secretaria de Saúde de MG**: Minas Gerais State Health Department
- **Prefeitura de Montes Claros**: Montes Claros City Hall

### Data Types
- **Daily Cases**: New cases reported each day
- **Deaths**: COVID-19 related deaths
- **Recovered**: Number of recovered patients
- **Active Cases**: Currently active cases
- **Hospitalizations**: Hospital admission data
- **Vaccination**: Vaccination progress

## Performance and Scalability

### Optimization Features
- **Asynchronous Processing**: Non-blocking data collection
- **Caching**: Redis-based caching for frequently accessed data
- **Database Indexing**: Optimized database queries
- **Load Balancing**: Horizontal scaling support

### Monitoring
- **Health Checks**: Service health monitoring
- **Performance Metrics**: Response time and throughput tracking
- **Error Logging**: Comprehensive error tracking
- **Alerting**: Automated alerts for system issues

## Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Set up the development environment
4. Make your changes
5. Add tests if applicable
6. Submit a pull request

### Areas for Contribution
- Additional data sources
- Improved OCR accuracy
- New analysis algorithms
- UI/UX improvements
- Performance optimizations
- Documentation updates

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Brazilian health authorities for providing data
- Open source community for tools and libraries
- Contributors and users who helped improve the system
- Healthcare workers and researchers fighting the pandemic

---

*Tracking COVID-19 data to help protect our community.*
