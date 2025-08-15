import os
import re
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime, timedelta
import numpy as np
from collections import defaultdict
import seaborn as sns

def extract_dates_from_directories(directory_path='.'):
    """
    Extract dates from directory names that start with YYYY_MM_DD_*
    
    Args:
        directory_path: Path to search for directories (default: current directory)
    
    Returns:
        list of datetime objects
    """
    date_pattern = re.compile(r'^(\d{4})_(\d{2})_(\d{2})_.*')
    dates = []
    
    try:
        for item in os.listdir(directory_path):
            if os.path.isdir(os.path.join(directory_path, item)):
                match = date_pattern.match(item)
                if match:
                    year, month, day = map(int, match.groups())
                    try:
                        date = datetime(year, month, day)
                        dates.append(date)
                    except ValueError:
                        print(f"Invalid date in directory name: {item}")
    except FileNotFoundError:
        print(f"Directory not found: {directory_path}")
    
    return dates

def create_time_series_data(dates):
    """
    Create a complete time series with counts, including missing dates
    
    Args:
        dates: list of datetime objects
    
    Returns:
        pandas DataFrame with date and count columns
    """
    if not dates:
        return pd.DataFrame(columns=['date', 'count'])
    
    # Count occurrences of each date
    date_counts = defaultdict(int)
    for date in dates:
        date_counts[date] += 1
    
    # Create date range from min to max date
    min_date = min(dates)
    max_date = max(dates)
    
    # Create complete date range (including missing dates with 0 count)
    date_range = pd.date_range(start=min_date, end=max_date, freq='D')
    
    # Create DataFrame
    data = []
    for date in date_range:
        count = date_counts[date.to_pydatetime()]
        data.append({'date': date, 'count': count})
    
    return pd.DataFrame(data)

def plot_time_series(df, title="TidalCycles activity, full history"):
    """
    Create a time series plot with dots and horizontal step lines
    
    Args:
        df: DataFrame with 'date' and 'count' columns
        title: Plot title
    """
    if df.empty:
        print("No data to plot")
        return None, None
    
    # Set dark style
    plt.style.use('dark_background')
    
    fig, ax = plt.subplots(figsize=(15, 6))
    fig.patch.set_facecolor('#0d1117')
    ax.set_facecolor('#0d1117')
    
    # Plot horizontal step lines and dots
    ax.step(df['date'], df['count'], where='mid', linewidth=1.5, alpha=0.8, color='#40c463')
    ax.plot(df['date'], df['count'], 'o', markersize=4, alpha=0.9, color='#40c463')
    
    # Customize x-axis
    ax.xaxis.set_major_locator(mdates.MonthLocator())
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
    ax.xaxis.set_minor_locator(mdates.DayLocator(interval=7))
    
    # Rotate x-axis labels
    plt.setp(ax.xaxis.get_majorticklabels(), rotation=45, ha='right')
    
    # Customize plot with dark theme colors
    ax.set_title(title, fontsize=16, pad=20, color='#f0f6fc')
    ax.set_xlabel('Date', fontsize=12, color='#f0f6fc')
    ax.set_ylabel('Number of Directories', fontsize=12, color='#f0f6fc')
    ax.grid(True, alpha=0.2, color='#30363d')
    
    # Customize tick colors
    ax.tick_params(colors='#f0f6fc')
    
    # Set y-axis to start from 0
    ax.set_ylim(bottom=0)
    
    plt.tight_layout()
    return fig, ax

def create_github_heatmaps_by_year(dates, title="TidalCycles projects"):
    """
    Create separate GitHub-style activity heatmaps for each year
    
    Args:
        dates: list of datetime objects
        title: Plot title
    """
    if not dates:
        print("No data to plot")
        return [], []
    
    # Set dark style
    plt.style.use('dark_background')
    
    # Count occurrences by date
    date_counts = defaultdict(int)
    for date in dates:
        date_counts[date] += 1
    
    # Get unique years
    years = sorted(set(date.year for date in dates))
    
    figures = []
    axes = []
    
    for year in years:
        # Create date range for this year
        start_date = datetime(year, 1, 1)
        end_date = datetime(year, 12, 31)
        
        # Find the first Monday before or on January 1st
        first_monday = start_date - timedelta(days=start_date.weekday())
        
        # Create matrix for heatmap (7 days x ~53 weeks)
        weeks_data = []
        current_week = []
        current_date = first_monday
        
        # Calculate how many weeks we need (approximately 53-54 weeks per year)
        last_sunday = end_date + timedelta(days=(6 - end_date.weekday()))
        total_days = (last_sunday - first_monday).days + 1
        total_weeks = (total_days + 6) // 7
        
        week_count = 0
        while week_count < total_weeks:
            for day in range(7):  # Monday to Sunday
                if current_date <= last_sunday:
                    count = date_counts.get(current_date, 0) if start_date <= current_date <= end_date else 0
                    current_week.append(count)
                else:
                    current_week.append(0)
                current_date += timedelta(days=1)
            
            weeks_data.append(current_week)
            current_week = []
            week_count += 1
        
        # Convert to numpy array (weeks x 7 days)
        heatmap_data = np.array(weeks_data).T  # Transpose so days are rows (7 x weeks)
        
        # Create the plot with fixed aspect ratio
        fig, ax = plt.subplots(figsize=(16, 3))
        fig.patch.set_facecolor('#0d1117')
        ax.set_facecolor('#0d1117')
        
        # Define GitHub-like color scheme for dark mode
        max_count = max(date_counts.values()) if date_counts else 1
        colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
        
        # Create custom colormap
        from matplotlib.colors import ListedColormap
        github_cmap = ListedColormap(colors)
        
        # Normalize data to color levels (0-4)
        if max_count > 0:
            normalized_data = np.clip(heatmap_data * 4 / max_count, 0, 4).astype(int)
        else:
            normalized_data = np.zeros_like(heatmap_data)
        
        # Create heatmap with square cells
        im = ax.imshow(normalized_data, cmap=github_cmap, aspect='equal', vmin=0, vmax=4)
        
        # Customize axes
        ax.set_yticks(range(7))
        ax.set_yticklabels(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], color='#f0f6fc')
        
        # Set x-axis ticks for months
        month_positions = []
        month_labels = []
        current_date = first_monday
        for week_idx in range(len(weeks_data)):
            week_start = first_monday + timedelta(weeks=week_idx)
            if week_start.day <= 7 and week_start >= start_date and week_start <= end_date:
                month_positions.append(week_idx)
                month_labels.append(week_start.strftime('%b'))
            current_date += timedelta(days=7)
        
        ax.set_xticks(month_positions)
        ax.set_xticklabels(month_labels, color='#f0f6fc')
        
        # Remove tick marks
        ax.tick_params(length=0, colors='#f0f6fc')
        
        # Add title
        ax.set_title(f'{title} - {year}', fontsize=14, pad=15, color='#f0f6fc')
        
        # Remove spines
        for spine in ax.spines.values():
            spine.set_visible(False)
        
        figures.append(fig)
        axes.append(ax)
    
    return figures, axes

def save_plots(time_series_fig, github_figs, output_dir='activity_plots'):
    """
    Save all plots as PNG files in the specified directory
    
    Args:
        time_series_fig: Time series plot figure
        github_figs: List of GitHub heatmap figures
        output_dir: Directory to save plots (default: 'activity_plots')
    """
    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Created directory: {output_dir}")
    
    # Save time series plot
    if time_series_fig:
        time_series_path = os.path.join(output_dir, 'time_series.png')
        time_series_fig.savefig(time_series_path, dpi=300, bbox_inches='tight', 
                               facecolor='#0d1117', edgecolor='none')
        print(f"Saved time series plot: {time_series_path}")
    
    # Save GitHub heatmaps
    for i, fig in enumerate(github_figs):
        # Extract year from the figure title
        year = fig.axes[0].get_title().split(' - ')[-1]
        github_path = os.path.join(output_dir, f'github_activity_{year}.png')
        fig.savefig(github_path, dpi=300, bbox_inches='tight',
                   facecolor='#0d1117', edgecolor='none')
        print(f"Saved GitHub heatmap: {github_path}")
    
    print(f"\nAll plots saved to: {os.path.abspath(output_dir)}")

def main(directory_path='.'):
    """
    Main function to analyze directories and create plots
    
    Args:
        directory_path: Path to search for directories
    """
    print(f"Analyzing directories in: {os.path.abspath(directory_path)}")
    
    # Extract dates from directory names
    dates = extract_dates_from_directories(directory_path)
    
    if not dates:
        print("No directories with date patterns found!")
        return
    
    print(f"Found {len(dates)} directories with date patterns")
    print(f"Date range: {min(dates).strftime('%Y-%m-%d')} to {max(dates).strftime('%Y-%m-%d')}")
    
    # Create time series data
    df = create_time_series_data(dates)
    
    # Create plots
    print("Creating time series plot...")
    fig1, ax1 = plot_time_series(df)
    
    print("Creating GitHub-style heatmaps by year...")
    figures, axes = create_github_heatmaps_by_year(dates)
    
    # Save all plots
    print("Saving plots...")
    save_plots(fig1, figures)
    
    # Show statistics
    print(f"\nStatistics:")
    print(f"Total directories: {len(dates)}")
    print(f"Unique dates: {len(set(dates))}")
    print(f"Average per day: {len(dates) / len(df):.2f}")
    print(f"Most active day: {df.loc[df['count'].idxmax(), 'date'].strftime('%Y-%m-%d')} ({df['count'].max()} directories)")
    
    # Show yearly breakdown
    years = sorted(set(date.year for date in dates))
    for year in years:
        year_dates = [d for d in dates if d.year == year]
        print(f"Year {year}: {len(year_dates)} directories")
    
    plt.show()

if __name__ == "__main__":
    # Example usage
    # main("path/to/your/directory")  # Specify your directory path
    main(".")  # Use current directory
